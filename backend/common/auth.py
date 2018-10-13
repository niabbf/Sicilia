from flask import request
from common.redis_connector import get_redis


def auth(handler):
    def wrapper():
        token = request.headers.get('token')
        user = request.headers.get('user')
        if token is None:
            return 'token not found', 401
        redis = get_redis()
        _user = redis.get(token)
        if _user != user:
            return 'token has expired', 401
        return handler()
    return wrapper
