from flask import Blueprint, request
from common.auth import auth
from pymongo import MongoClient
import uuid
import json
import time

tasks = Blueprint('tasks', __name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['SICILIA']
Task = db['Tasks']
Account = db['Account']


def convert_date(value):
    return value

def convert_post_data_to_query(post_data):
    return post_data

def task_sort(begin,length,lis):
    # sort
    for i in range(len(lis)):
        for j in range(len(lis)):
            if lis[i]['deadline'] < lis[j]['deadline']:
                temp = lis[i]['deadline']
                lis[i]['deadline'] = lis[j]['deadline']
                lis[j]['deadline'] = temp
    return lis[begin:begin+length]


@tasks.route('/own_tasks', methods=['POST'])
@auth
def get_own_tasks():
    post_data = request.form.to_dict()
    query_params = convert_post_data_to_query(post_data)
    user = request.headers.get('user')
    query_params['task_sponser'] = user
    ret = []
    for task in Task.find(query_params):
        task.pop('_id')
        ret.append(task)
    return json.dumps(ret)


@tasks.route('/executing_tasks', methods=['POST'])
@auth
def get_executing_tasks():
    post_data = request.form.to_dict()
    query_params = convert_post_data_to_query(post_data)
    user = request.headers.get('user')
    query_params['task_executor'] = user
    query_params['status'] = 1
    ret = []
    for task in Task.find(query_params):
        task.pop('_id')
        ret.append(task)
    return json.dumps(ret)


@tasks.route('/tasks', methods=['POST'])
# @auth
def get_tasks():
    post_data = request.form.to_dict()
    query_params = convert_post_data_to_query(post_data)
    query_params['status'] = 0

    begin = -1
    length = -1
    if 'begin' in query_params:
        begin = int(query_params['begin'])
        length = int(query_params['length'])
        query_params.pop('begin')
        query_params.pop('length')

    ret = []
    today = time.strftime('%Y.%m.%d', time.localtime(time.time())).replace('.', '-')
    for task in Task.find(query_params):

        if task['deadline'] < today:
            continue
        if 'location' in query_params:
            if query_params['location'] != task['location']:
                continue

        task.pop('_id')
        ret.append(task)

    ret = task_sort(0,len(ret),ret)
    if begin!=-1:
        return json.dumps(ret[begin:begin+length]),200

    return json.dumps(ret), 200


@tasks.route('/publish_task', methods=['POST'])
@auth
def publish_task():
    post_data = request.form.to_dict()
    user = request.headers.get('user')
    task = post_data
    task['task_sponser'] = user
    task['deadline'] = convert_date(post_data.get('deadline', '2100/01/01'))
    task['description'] = post_data.get('description', 'no description')
    task['location'] = post_data.get('location', 'shanghai')
    reward = int(post_data.get('reward', 0))
    task_id = str(uuid.uuid4())
    task['status'] = 0
    task['task_id'] = task_id
    task['task_executor'] = None
    user_info = Account.find_one({'user': user})
    if user_info is None or user_info.get('cash', 0) < reward:
        return 'you do not have enough money to publish this task.', 400
    task['reward'] = reward
    Account.update_one({'user': user_info.get('user', '')}, {'$set': {'cash': int(user_info.get('cash', 0)) - reward}})
    task = Task.insert_one(task)
    return task_id, 200


@tasks.route('/confirm_task/<task_id>', methods=['GET'])
@auth
def confirm_task(task_id):
    user = request.headers.get('user')
    task = Task.find_one({'task_id': task_id})
    if task is None:
        return 'task do not exist', 400
    if task.get('task_sponser') != user:
        return 'you are not task sponser', 400
    print(task)
    task_executor = task.get('task_executor')
    if task_executor is None:
        return 'this task has no executor', 400
    if task.get('status') != 1:
        return 'this task is not in executing', 400
    user_info = Account.find_one({'user': task_executor})
    if user_info is None:
        return 'task executor do not exist', 400
    Account.update_one({'user': task_executor}, {'$set': {'cash': user_info.get('cash', 0) + task.get('reward', 0)}})
    Task.update_one({'task_id': task_id}, {'$set': {'status': 2}})
    return 'success', 200


@tasks.route('/start_task/<task_id>', methods=['GET'])
@auth
def start_task(task_id):
    user = request.headers.get('user')
    task = Task.find_one({'task_id': task_id})
    if task is None:
        return 'task do not exist', 400
    task_executor = task.get('task_executor')
    if task_executor is not None:
        return 'this task is already on executing', 400
    Task.update_one({'task_id': task_id}, {'$set': {'task_executor': user, 'status': 1}})
    return 'success', 200
