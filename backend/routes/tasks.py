from flask import Blueprint, request
from common.auth import auth
from pymongo import MongoClient
import json

tasks = Blueprint('tasks', __name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['SICILIA']
Task = db['Tasks']


@tasks.route('/owntasks', methods=['GET'])
@auth
def get_own_tasks():
    user = request.headers.get('user')
    ret = []
    for task in Task.find({'username': user}):
        task.pop('_id')
        ret.append(task)
    return json.dumps(ret)


@tasks.route('/tasks', methods=['GET'])
@auth
def get_tasks():
    ret = []
    for task in Task.find({}):
        task.pop('_id')
        ret.append(task)
    return json.dumps(ret)


@tasks.route('/add_task', methods=['POST'])
@auth
def add_task():
    post_data = request.form.to_dict()
    post_data['user'] = request.headers.get('user')
    task = Task.insert_one(post_data)
    return 'success'
