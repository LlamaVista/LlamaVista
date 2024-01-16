from fastapi import HTTPException, status, Request
import requests


def get_current_user(request: Request):
    access_token = request.cookies.get('access_token')

    profile_response = requests.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        headers={"Authorization": f"Bearer {access_token}"},
    )

    if profile_response.status_code != 200:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired Google access token"
        )

    profile_data = profile_response.json()
    return profile_data.get('name')
