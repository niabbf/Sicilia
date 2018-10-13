from flask import Blueprint

alive = Blueprint('alive', __name__)

@alive.route('/', methods=['GET'])
def index():
    return 'welcome!'
