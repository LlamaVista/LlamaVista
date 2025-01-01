import os

from fastapi import APIRouter, Depends, Form
from openai import OpenAI
from database import MongoClient
from starlette.responses import StreamingResponse

from settings import settings
from service.fastapi_auth import get_current_user
from vista.event_handler import generate_responses

router = APIRouter()
client = OpenAI(api_key=settings.OPEN_API_KEY)
assistant_id_list = settings.ASSISTANT_ID.split(',')
assistant_id_dict = {"life": assistant_id_list[0], "houses": assistant_id_list[1], "shopping": assistant_id_list[2]}


@router.post('/create-chat')
async def create_chat(csv_name: str = Form(...), user=Depends(get_current_user)):
    thread = client.beta.threads.create(messages=[
        {"role": "user",
         "content": settings.DATASET_INFO[csv_name],
         "attachments": []
         }
    ])

    await MongoClient.get_client().chat.users.update_one(
        {"email": user['email']},
        {"$push": {"threads": {"assistant_id": assistant_id_dict[csv_name], "thread_id": thread.id, "name": csv_name,
                               "messages": [{}]}}},
    )

    return {"assistant_id": assistant_id_dict[csv_name], "thread_id": thread.id}


@router.post('/continue-chat')
async def resume(assistant_id: str = Form(...), thread_id: str = Form(...),
                 messages: str = Form(...), user=Depends(get_current_user)):
    client.beta.threads.messages.create(
        thread_id=thread_id,
        role="user",
        content=messages
    )
    generator = await generate_responses(
        client,
        assistant_id,
        thread_id,
    )
    return StreamingResponse(generator(), media_type="text/event-stream")


