from fastapi import FastAPI, Depends
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import database
import model
import service
from service import get_current_user

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

origins = [
    "http://localhost",
    "http://localhost:3000"
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(database.router)
app.include_router(service.router)
app.include_router(model.router)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello")
async def hello(current_user: str = Depends(get_current_user)):
    return {"message": "Hello, you are authenticated!",
            "current_user": f"{current_user}"}
