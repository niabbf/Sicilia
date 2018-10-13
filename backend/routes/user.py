from flask import Blueprint
from flask import request
from pymongo import MongoClient
import uuid
from common.redis_connector import get_redis
from common.md5 import generateMD5

user = Blueprint('user', __name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['SICILIA']
Collection = db['Collection']


def add_user(username, password):
    Collection.insert_one({'username': username, 'password': password})


@user.route('/login', methods=['POST'])
def login():
    name = request.form['name']
    password = request.form['password']
    md5_password = generateMD5(password)
    ret = Collection.find_one({'username': name})
    if ret is None or ret.get('password') != md5_password:
        return "fail", 401
    else:
        redis = get_redis()
        token = str(uuid.uuid4())
        redis.set(token, name, ex=3600)
        return token, 200


@user.route('/register', methods=['POST'])
def register():
    name = request.form['name']
    password = request.form['password']
    md5_password = generateMD5(password)

    ret = Collection.find_one({'username': name})
    if ret is not None:
        return "fail", 401
    else:
        add_user(name, md5_password)
        return "success", 200
