from fastapi import APIRouter, Form, File, UploadFile, Depends
from pydantic import BaseModel

from model.summarizer import OpenAIManager
from service import get_current_user
from settings import settings

router = APIRouter()


class RequestModel(BaseModel):
    grammar: str
    max_tokens: int
    temperature: float
    number_messages: int
    presence_penalty: float
    frequency_penalty: float
    user_message: str


@router.post("/send")
async def receive_data(file: UploadFile = File(...), grammar: str = Form(...), max_tokens: int = Form(...),
                       temperature: float = Form(...), number_messages: int = Form(...),
                       presence_penalty: float = Form(...), frequency_penalty: float = Form(...),
                       user_message: str = Form(...), current_user: str = Depends(get_current_user)
                       ):
    request_settings = RequestModel(
        grammar=grammar,
        max_tokens=max_tokens,
        temperature=temperature,
        number_messages=number_messages,
        presence_penalty=presence_penalty,
        frequency_penalty=frequency_penalty,
        user_message=user_message
    )

    manager = OpenAIManager()
    assistant_id = settings.ASSISTANT_ID
    assistant = manager.client.beta.assistants.retrieve(assistant_id)
    prompt = request_settings.user_message
    thread, run = manager.create_thread_and_run(assistant, prompt)
    run = manager.wait_on_run(run, thread)
    response = manager.get_response(thread)
    manager.pretty_print(manager.get_response(thread))

    return response
