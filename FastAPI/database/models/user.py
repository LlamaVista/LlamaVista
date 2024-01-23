from typing import Annotated, Optional

from bson import ObjectId
from pydantic import BaseModel, EmailStr, Field

from database.models.object import ObjectIdPydanticAnnotation


class User(BaseModel):
    id: Optional[ObjectIdPydanticAnnotation] = Field(default_factory=ObjectId, alias='_id')
    name: Optional[str]
    email: Optional[EmailStr]
    hashed_password: Optional[str]
    google_email: Optional[EmailStr] = None

    class Config:
        populate_by_name = True
        json_encoders = {ObjectId: lambda oid: str(oid)}
        from_attributes = True
