from database import MongoClient
from database import User


async def find_user_by_google_email(google_email: str, name: str) -> User:
    db_client = MongoClient.get_client()
    user_collection = db_client.user.userinfo
    user = await user_collection.find_one({'google_email': google_email})

    if not user:
        new_user = User(name=name, google_email=google_email)
        await user_collection.insert_one(new_user.model_dump())
        return new_user

    return user
