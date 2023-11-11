import os
import json
import requests
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS

from model.summarizer import Summarizer, to_json

app = Flask(__name__)
CORS(app)
load_dotenv('env/.env')


@app.route('/')
def hello_world():
    return 'Hello World!'


def process(file, settings_json, user_messages, callback_url):
    try:
        summarizer_result = run_summarizer(file, settings_json, user_messages)
        requests.post(callback_url + "/summarizer", json={"step": "summarizer", "result": summarizer_result})
        goal_explorer_result = run_goal_explorer(summarizer_result)
        requests.post(callback_url + "/goal_explorer", json={"step": "goal_explorer", "result": goal_explorer_result})
        visualization_result = run_visualization(goal_explorer_result)
        requests.post(callback_url + "/visualization", json={"step": "visualization", "result": visualization_result})
    except Exception as e:
        requests.post(callback_url + "/summarizer", json={"step": "error", "result": str(e)})


@app.route('/process', methods=['POST'])
def process_data():
    file = request.files.get('file')
    settings_json = request.form.get('settings')
    user_messages_json = request.form.get('message')
    user_messages = json.loads(user_messages_json)
    callback_url = 'http://localhost:8080'
    process(file, settings_json, user_messages, callback_url)
    return jsonify({"message": "Processing started"})


def run_summarizer(file, settings, client_message):
    api_key = os.getenv('OPEN_API_KEY')
    summarizer = Summarizer(api_key)
    assistant = summarizer.get_assistant(file)
    thread = summarizer.create_thread(client_message)
    messages = summarizer.run_assistant(thread, assistant)
    return to_json(messages)


def run_goal_explorer(summarizer_result):
    print('goal_explorer')
    return summarizer_result


def run_visualization(goal_explorer_result):
    print('visualization')
    return goal_explorer_result


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5901)
