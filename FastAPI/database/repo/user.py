from database import MongoClient
from database import User


async def find_user_by_google_email(google_email: str, name: str) -> User:
    user = await MongoClient.get_client().user.userinfo.find_one({
        'google_email': google_email
    })
    if not user:
        new_user = User(name=name, google_email=google_email)
        await MongoClient.get_client().user.userinfo.insert_one(new_user.model_dump())
        return new_user

    return user
