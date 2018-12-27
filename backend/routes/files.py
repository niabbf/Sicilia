from flask import Blueprint, request
from common.auth import auth
from pymongo import MongoClient
import uuid
import json

ifiles = Blueprint('ifiles', __name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['SICILIA']
Account = db['Account']


@ifiles.route('/upload_image', methods=['POST'])
@auth
def upload_file():
    post_data = request.form.to_dict()
    user = request.headers.get('user')
    Account.update_one({'user': user}, {'$set': {'touxiang': post_data}})
    return 'success'


@ifiles.route('/download_image', methods=['GET'])
@auth
def download_file():
    user = request.headers.get('user')
    account = Account.find_one({'user': user})
    return json.dumps(account.get('touxiang', {})), 200
