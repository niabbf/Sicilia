from flask import Blueprint
from flask import request
from common.auth import auth
from pymongo import MongoClient
import json

account = Blueprint('account', __name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['SICILIA']
Account = db['Account']


@account.route('/account_info', methods=['GET'])
@auth
def query_account_info():
    user = request.headers.get('user')
    ret = Account.find_one({'user': user})
    if ret is None:
        return "user not found", 400
    else:
        ret.pop('_id')
        return json.dumps(ret), 200
