from flask import request
from common.redis_connector import get_redis
from functools import wraps


def auth(handler):
    @wraps(handler)
    def wrapper(*args, **kwargs):
        token = request.cookies.get('token')
        user = request.cookies.get('user')
        if token is None:
            return 'token not found', 401
        redis = get_redis()
        _user = redis.get(token)
        if _user != user:
            return 'token has expired', 401
        return handler(*args, **kwargs)
    return wrapper
