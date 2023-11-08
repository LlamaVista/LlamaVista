import os
import io
import json

import pandas as pd

from openai import OpenAI
    
# client = OpenAI(api_key="YOUR_API_KEY")

def _get_description(df) -> tuple:
    df.dropna(inplace=True)
    
    # info
    buffer = io.StringIO()
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
    
def get_assistant(client, file_path) -> tuple:
    # size limit
    file = client.files.create(
        file=open(file_path, "rb"),
        purpose='assistants'
    )
    
    df = pd.read_csv(file_path)
    info, description, unique_values = _get_description(df)
    
    new_assistant = client.beta.assistants.create(
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
        tools=[{"type": "code_interpreter"}], # type: code_interpreter, retrieval, function
        model="gpt-4-1106-preview",
        file_ids=[file.id]
    )
    
    return new_assistant

def create_thread(client) -> object:
    # without size limit
    new_thread = client.beta.threads.create()
    message = client.beta.threads.messages.create(
        thread_id=new_thread.id,
        role="user",
        content="I need to visualize the data. Can you recommend me 4 plots that describe the data as much as possible?, and give me the python code to plot them.",
        )
    # add thread message
    # message = client.beta.threads.messages.create(
    #     thread_id=thread.id,
    #     role="user",
    #     content="add thread message ..."
    #     )
    return new_thread
    
def run_assistant(client, thread, assistant) -> object:
    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=assistant.id,
        # instructions="I want you to elaborate why you recommend these plots.",
    )
    while(run.status != "completed"):
        run = client.beta.threads.runs.retrieve(
            thread_id=thread.id,
            run_id=run.id
        )
        
        print("run.status: ", run.status)
        if run.status == "failed":
            raise Exception("The run failed with the message: " + run.error)
        
    messages = client.beta.threads.messages.list(
        thread_id=thread.id,
    )
    return messages

def save_json(message):
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
    
    # save json
    with open('./ML/data_summarizer/results/chatgpt_assistant_output.json', 'w') as f:
        json.dump(json_message, f)
    
if __name__=="__main__":
    client = OpenAI()
    
    assistant = get_assistant(client, file_path="./ML/data_summarizer/cars.csv")
    thread = create_thread(client)
    
    message = run_assistant(client, thread, assistant)
    
    save_json(message)
        