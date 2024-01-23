import requests
from fastapi import APIRouter
from fastapi import HTTPException, status, Response, Request
from fastapi.responses import RedirectResponse

from settings import settings

from pydantic import BaseModel


class TokenRequest(BaseModel):
    code: str


class UserInfoRequest(BaseModel):
    access_token: str


router = APIRouter()


@router.get("/google-login")
async def google_login():
    url = (
        "https://accounts.google.com/o/oauth2/auth"
        "?access_type=offline"
        "&prompt=consent"
        "&response_type=code"
        f"&client_id={settings.GOOGLE_CLIENT_ID}"
        f"&redirect_uri={settings.REDIRECT_URI}"
        "&scope=openid%20email%20profile"
    )
    return RedirectResponse(url)


@router.post("/callback")
async def callback(code: TokenRequest):
    token_data = {
        "code": code,
        "client_id": settings.GOOGLE_CLIENT_ID,
        "client_secret": settings.GOOGLE_CLIENT_SECRET,
        "redirect_uri": settings.REDIRECT_URI,
        "access_type": "offline",
        "prompt": "consent",
        "grant_type": "authorization_code",
    }

    response = requests.post(settings.GOOGLE_TOKEN_ENDPOINT, data=token_data)
    if response.status_code != 200:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Failed to exchange authorization code for tokens",
        )

    token_response = response.json()
    access_token = token_response.get("access_token")
    refresh_token = token_response.get("refresh_token")

    return {"access_token": access_token, "refresh_token": refresh_token}


@router.post("/userinfo")
async def userinfo(access_token: UserInfoRequest):
    profile_response = requests.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        headers={"Authorization": f"Bearer {access_token}"},
    )
    profile_data = profile_response.json()
    return profile_data