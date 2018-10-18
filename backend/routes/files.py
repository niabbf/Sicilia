from flask import Blueprint, request
from common.auth import auth
import os

ifiles = Blueprint('ifiles', __name__)


@ifiles.route('/upload', methods=['POST'])
@auth
def upload_file():
    post_data = request.form.to_dict()
    basedir = os.path.abspath(os.path.dirname(__file__))
    try:
        img = request.files.get('file')
        path = basedir + "/../static/images/"
        file_path = path + img.filename
        img.save(file_path)
    except Exception as e:
        print(e)
    return 'upload success'
