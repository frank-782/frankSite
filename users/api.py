def get_user(user):
    return {
        "uid": user.id,
        "username": user.username,
        "joinTime": str(user.date_joined),
    }


def get_user_session(request):
    user = request.user
    if user.is_anonymous:
        return {"isLogin": False}
    return {
        "isLogin": True,
        "uid": user.id,
        "username": user.username,
        "email": user.email,
        "messageCount": 0,
        "joinTime": str(user.date_joined),
        "lastLogin": str(user.last_login),
        "isAdmin": user.is_superuser,
        "isBanned": not user.is_active
    }
