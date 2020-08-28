from users.api import get_user_session
import json


def user_session(request):
    return {"user_session": json.dumps(get_user_session(request))}
