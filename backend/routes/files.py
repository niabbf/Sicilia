from flask import Blueprint, request
from common.auth import auth
from pymongo import MongoClient
import json

ifiles = Blueprint('ifiles', __name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['SICILIA']
Image = db['Image']


@ifiles.route('/upload_image', methods=['POST'])
@auth
def upload_file():
    post_data = request.form.to_dict()
    image_id = str(uuid.uuid4())
    image = post_data
    image['image_id'] = image_id
    Image.insert_one(image)
    return image_id


@ifiles.route('/download_image', methods=['POST'])
@auth
def download_file():
    post_data = request.form.to_dict()
    image_id = post_data.get('image_id', '')
    image = Image.find_one({'image_id': image_id})
    return json.dumps(image), 200
