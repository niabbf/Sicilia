from flask import Flask
from flask import request
from pymongo import MongoClient
from common.redis_connector import get_redis
import uuid

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['SICILIA']
Collection = db['Collection']


def add_user(username, password):
    Collection.insert_one({'username': username, 'password': password})


@app.route('/login', methods=['POST'])
def login():
    name = request.form['name']
    psww = request.form['password']
    ret = Collection.find_one({'username': name})
    if ret is None or ret.get('password') != psww:
        return "fail", 401
    else:
        redis = get_redis()
        token = str(uuid.uuid4())
        redis.set(token, 'Alive', ex=3600)
        return token, 200


@app.route('/', methods=['GET'])
def index():
    return "welcome!"

@app.route('/register', methods=['POST'])
def register():
    name = request.form['name']
    psww = request.form['password']

    ret = Collection.find_one({'username': name})
    if ret is not None:
        return "fail", 401
    else:
        add_user(name, psww)
        return "success", 200


if __name__ == '__main__':
    #add_user()
    # key是"food" value是"mutton" 将键值对存入redis缓存
    # redis.set('food', 'mutton', ex=3)
    # print(redis.get('food'))  # mutton 取出键food对应的值
    app.run(debug=True, host='0.0.0.0', port=80)
