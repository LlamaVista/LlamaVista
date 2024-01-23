import bcrypt
from fastapi import APIRouter, Form
from fastapi import Depends
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_login.exceptions import InvalidCredentialsException
from fastapi_login import LoginManager
from pydantic import EmailStr

from database import MongoClient, User
from settings import settings


router = APIRouter()


manager = LoginManager(settings.SECRET_KEY, token_url='/auth/token')


def hash_password(plain_password: str) -> str:
    hashed_password = bcrypt.hashpw(plain_password.encode('utf-8'), bcrypt.gensalt())
    return hashed_password.decode('utf-8')


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))


@manager.user_loader()
async def load_user(email: str):  # could also be an asynchronous function
    user = await MongoClient.get_client().user.userinfo.find_one({"email": email})
    return user


@router.post("/register")
async def register(name: str = Form(...), email: EmailStr = Form(...), password: str = Form(...)):
    hashed_password = hash_password(password)
    user = User(name=name, email=email, hashed_password=hashed_password)
    MongoClient.get_client().user.userinfo.insert_one(user.model_dump(by_alias=True))
    return {"message": "User registered successfully"}


@router.post('/auth/token')
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await MongoClient.get_client().user.userinfo.find_one({"email": form_data.username})
    if not user or not verify_password(form_data.password, user['hashed_password']):
        raise InvalidCredentialsException(status_code=401, detail="Invalid credentials")
    access_token = manager.create_access_token(data=dict(sub=form_data.username))
    return {'access_token': access_token, 'token_type': 'bearer'}


@router.get('/protected')
async def protected_route(user=Depends(manager)):
    return jsonable_encoder(user, exclude={"_id"})
