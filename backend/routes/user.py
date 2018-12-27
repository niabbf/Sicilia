from flask import Blueprint
from flask import request
from pymongo import MongoClient
import uuid
from common.redis_connector import get_redis
from common.md5 import generateMD5

user = Blueprint('user', __name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['SICILIA']
User = db['User']
Account = db['Account']
Task = db['Tasks']

def add_user(username, password):
    Account.insert_one({'user': username, 'cash': 100})
    User.insert_one({'username': username, 'password': password})


@user.route('/login', methods=['POST'])
def user_login():
    post_data = request.form.to_dict()
    name = post_data.get('name')
    password = post_data.get('password')
    md5_password = generateMD5(password)
    ret = User.find_one({'username': name})
    if ret is None:
        return "user do not exist", 401
    elif ret.get('password') != md5_password:
        return "password wrong", 401
    else:
        redis = get_redis()
        token = str(uuid.uuid4())
        redis.set(token, name, ex=3600*24)
        return token, 200


@user.route('/register', methods=['POST'])
def user_register():
    post_data = request.form.to_dict()
    name = post_data.get('name')
    password = post_data.get('password')
    md5_password = generateMD5(password)

    ret = User.find_one({'username': name})
    if ret is not None:
        return "user exist", 401
    else:
        add_user(name, md5_password)
        return "success", 200


@user.route('/update', methods=['POST'])
def user_update():
    post_data = request.form.to_dict()
    name = post_data.get('name')
    if name:
        post_data.pop('name')
    password = post_data.get('password')
    if password:
        post_data.pop('password')
    new_password = post_data.get('new_password')
    if new_password:
        post_data.pop('new_password')
    print(post_data)
    md5_password = generateMD5(password)
    ret = User.find_one({'username': name})
    if ret is None or ret.get('password') != md5_password:
        return "password wrong", 401
    new_md5_password = generateMD5(new_password)
    post_data['password'] = new_md5_password
    User.update_one({'username': name}, {'$set': post_data})
    return 'success', 200
