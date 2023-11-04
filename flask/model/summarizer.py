from openai import OpenAI
import pandas as pd
from io import BytesIO, StringIO
import json


def _get_description(df) -> tuple:
    df.dropna(inplace=True)

    # info
    buffer = StringIO()
    df.info(buf=buffer)
    info_str = buffer.getvalue()

    # description
    describe_str = df.describe().to_string()

    # unique values
    unique_values = {}
    for col in df.columns:
        if df[col].dtype == 'object':
            if df[col].nunique() < 50:
                unique_values[col] = df[col].unique()

    unique_values_str = ''
    for col in unique_values:
        unique_values_str += f'{col}: {unique_values[col]}\n'

    return info_str, describe_str, unique_values_str


def to_json(message):
    dump = {}
    for i in range(len(message.data)):
        dump[i] = {}
        dump[i]['id'] = message.data[i].id
        dump[i]['assistant_id'] = message.data[i].assistant_id
        dump[i]['content'] = {}
        for j in range(len(message.data[i].content)):
            if message.data[i].content[j].type == "image_file":
                dump[i]['content'][j] = message.data[i].content[j].image_file.file_id
            elif message.data[i].content[j].type == "text":
                dump[i]['content'][j] = message.data[i].content[j].text.value
        dump[i]['created_at'] = message.data[i].created_at
        dump[i]['file_ids'] = message.data[i].file_ids
        dump[i]['metadata'] = message.data[i].metadata
        dump[i]['object'] = message.data[i].object
        dump[i]['role'] = message.data[i].role
        dump[i]['run_id'] = message.data[i].run_id
        dump[i]['thread_id'] = message.data[i].thread_id

    json_message = json.dumps(dump, indent=4)
    return json_message


class Summarizer:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)

    def get_assistant(self, file_storage) -> object:
        file_stream = BytesIO(file_storage.read())
        file = self.client.files.create(file=file_stream, purpose='assistants')
        file_stream.seek(0)
        df = pd.read_csv(file_stream)
        info, description, unique_values = _get_description(df)
        file_id = file.id
        new_assistant = self.client.beta.assistants.create(
            name="CSV interpreter",
            instructions=f"You are a CSV interpreter.\
                \nI want you to give me a recommendation for visualization of the data. \
                \nInterpret my description from CSV file. we assume that the file is loaded with 'df = pd.read_csv()'. \
                \n\
                \n--This is brief information of df--\
                \ndf.info:{info}\
                \nnumber column info(df.description):{description}\
                \nobject column info: {unique_values}\
                \n----\
            ",
            tools=[{"type": "code_interpreter"}],
            model="gpt-3.5-turbo-1106",
            file_ids=[file_id]
        )
        return new_assistant

    def create_thread(self, client_message) -> object:
        new_thread = self.client.beta.threads.create()
        message = self.client.beta.threads.messages.create(
            thread_id=new_thread.id,
            role="user",
            content=client_message
        )
        return new_thread

    def run_assistant(self, thread, assistant) -> object:
        run = self.client.beta.threads.runs.create(
            thread_id=thread.id,
            assistant_id=assistant.id,
        )
        while run.status != "completed":
            run = self.client.beta.threads.runs.retrieve(
                thread_id=thread.id,
                run_id=run.id
            )
            print("run.status: ", run.status)
            if run.status == "failed":
                raise Exception("The run failed with the message: " + run.error)
        messages = self.client.beta.threads.messages.list(
            thread_id=thread.id,
        )
        return messages
