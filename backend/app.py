from flask import Flask
from routes.user import user as user_blueprint

app = Flask(__name__)
app.register_blueprint(user_blueprint)


if __name__ == '__main__':
    #add_user()
    # key是"food" value是"mutton" 将键值对存入redis缓存
    # redis.set('food', 'mutton', ex=3)
    # print(redis.get('food'))  # mutton 取出键food对应的值
    app.run(debug=True, host='0.0.0.0', port=80)
