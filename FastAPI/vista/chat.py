import os

from fastapi import APIRouter, Depends, Form, UploadFile, File
from openai import OpenAI
from database import MongoClient
from starlette.responses import JSONResponse, StreamingResponse

from settings import settings
from service.fastapi_auth import get_current_user
from vista.event_handler import generate_responses

router = APIRouter()
client = OpenAI(api_key=settings.OPEN_API_KEY)
assistant_id_list = settings.EXAMPLE_ASSISTANT_ID.split(',')
assistant_id_dict = {"life": assistant_id_list[0], "houses": assistant_id_list[1], "shopping": assistant_id_list[2]}


@router.post('/create-chat')
async def create_chat(file: UploadFile = File(...), name: str = Form(...), user=Depends(get_current_user)):
    file_name = file.filename
    file_contents = await file.read()
    try:
        file_object = client.files.create(
            file=(file_name, file_contents),
            purpose="assistants",
        )

        # 파일 시스템에 파일 저장 (file_id를 파일명으로 사용)
        file_path = f"static/files/{file_object.id}.csv"
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, "wb") as f:
            f.write(file_contents)

        thread = client.beta.threads.create(messages=[
            {"role": "user",
             "content": "visualize following csv file",
             "attachments": [{"file_name": file_object.id}]
             }
        ])

        await MongoClient.get_client().chat.users.update_one(
            {"email": user['email']},
            {"$push": {"threads": {"assistant_id": settings.ASSISTANT_ID, "thread_id": thread.id, "name": name,
                                   "messages": [{}]}}},
        )

        return {"assistant_id": settings.ASSISTANT_ID, "thread_id": thread.id}
    except Exception as e:
            return JSONResponse(status_code=500, content={"message": str(e)})


@router.post('/create-chat-example')
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
async def resume(file: UploadFile = None, assistant_id: str = Form(...), thread_id: str = Form(...),
                 messages: str = Form(...), user=Depends(get_current_user)):
    thread = None
    file_name = file.filename
    if file:
        file_contents = await file.read()
        file_object = client.files.create(
            file=(file_name, file_contents),
            purpose="assistants",
        )

        # TODO file name 들어가면 작성 X
        # user file store logic

        thread = client.beta.threads.messages.create(
            thread_id=thread_id,
            role="user",
            content=messages,
            attachments=[{"file_id": file_object.id}],
        )

    else:
        thread = client.beta.threads.messages.create(
            thread_id=thread_id,
            role="user",
            content=messages,
            attachments=[],
        )
    if not thread:
        return JSONResponse(status_code=500, content={"message": "thread is None!"})

    generator = await generate_responses(
        client,
        assistant_id,
        thread_id,
    )
    return StreamingResponse(generator(), media_type="text/event-stream")


