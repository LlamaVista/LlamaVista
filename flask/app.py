from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from azure.storage.blob import BlobServiceClient
from dotenv import load_dotenv
import os
import json

app = Flask(__name__)
load_dotenv() 

# Azure Blob Storage 설정
CONNECTION_STRING = os.getenv("AZURE_STORAGE_CONNECTION_STRING")
CONTAINER_NAME = os.getenv("AZURE_CONTAINER_NAME")

# 데이터베이스 설정
app.config['SQLALCHEMY_DATABASE_URI'] = (
    f"mysql+pymysql://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}"
    f"@{os.getenv('DB_HOST')}/{os.getenv('DB_NAME')}"
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


# 데이터베이스 모델 정의
class Output(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    key1 = db.Column(db.String(255), nullable=False)
    key2 = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f"<Output {self.id}>"


@app.route('/read-json', methods=['GET'])
def read_json():
    try:
        blob_name = request.args.get('blob_name', 'origin.json')

        # Blob Service 클라이언트 초기화
        blob_service_client = BlobServiceClient.from_connection_string(CONNECTION_STRING)
        blob_client = blob_service_client.get_blob_client(container=CONTAINER_NAME, blob=blob_name)

        # Blob 데이터 스트리밍 읽기
        blob_data = blob_client.download_blob().readall()
        json_data = json.loads(blob_data.decode('utf-8'))

        # JSON 데이터 처리 및 데이터베이스에 저장
        if isinstance(json_data, list):
            for item in json_data:
                new_output = Output(key1=item.get('key1', '').upper(),
                                    key2=item.get('key2', '').upper())
                db.session.add(new_output)
            db.session.commit()
            return jsonify({"message": "Data successfully saved."}), 200
        else:
            return jsonify({"error": "Invalid JSON format"}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
