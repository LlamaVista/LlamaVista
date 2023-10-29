from flask import Flask, jsonify, request
from azure.storage.blob import BlobServiceClient
from dotenv import load_dotenv
import os
import json

app = Flask(__name__)
load_dotenv()  # 환경 변수 로드

# 환경 변수에서 Azure Blob Storage 정보 가져오기
CONNECTION_STRING = os.getenv("AZURE_STORAGE_CONNECTION_STRING")
CONTAINER_NAME = os.getenv("AZURE_CONTAINER_NAME")


@app.route('/read-json', methods=['GET'])
def read_json():
    try:
        blob_name = request.args.get('blob_name', 'testFile.json')

        # Blob Service 클라이언트 초기화
        blob_service_client = BlobServiceClient.from_connection_string(CONNECTION_STRING)
        blob_client = blob_service_client.get_blob_client(container=CONTAINER_NAME, blob=blob_name)

        # Blob 데이터 스트리밍 읽기
        blob_data = blob_client.download_blob().readall()
        json_data = json.loads(blob_data.decode('utf-8'))

        # 모델 넣어서 반환하기!!!
        if isinstance(json_data, list):
            upper_json_data = [{k: v.upper() if isinstance(v, str) else v for k, v in item.items()}
                               for item in json_data]
        else:
            upper_json_data = json_data

        # 대문자로 변환된 JSON 데이터 출력
        return jsonify(upper_json_data)
    except Exception as e:
        return str(e)


@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
