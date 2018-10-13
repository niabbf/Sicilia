from flask import Flask
from routes.user import user as user_blueprint
from routes.alive import alive as alive_blueprint
from routes.test import test as test_blueprint

app = Flask(__name__)
app.register_blueprint(user_blueprint)
app.register_blueprint(alive_blueprint)
app.register_blueprint(test_blueprint)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
