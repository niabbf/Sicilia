from flask import Blueprint
from common.auth import auth

test = Blueprint('test', __name__)


@test.route('/test', methods=['GET'])
@auth
def index():
    return 'auth ok!'
