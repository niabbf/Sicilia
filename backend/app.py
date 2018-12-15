from flask import Flask
from routes.user import user as user_blueprint
from routes.alive import alive as alive_blueprint
from routes.test import test as test_blueprint
from routes.tasks import tasks as tasks_blueprint
from routes.files import ifiles as files_blueprint
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(user_blueprint)
app.register_blueprint(alive_blueprint)
app.register_blueprint(test_blueprint)
app.register_blueprint(tasks_blueprint)
app.register_blueprint(files_blueprint)
CORS(app, supports_credentials=True, resources=r'/*')

@app.after_request
def af_request(resp):
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS'
    resp.headers['Access-Control-Allow-Headers'] = 'x-requested-with,content-type'
    return resp

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
