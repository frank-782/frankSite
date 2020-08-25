from django.contrib import admin
from django.urls import path, include
from .views import user_home, login, register

urlpatterns = [
    path('register/', register),
    path('login/', login)
    # path('<user:int>/', user_home),
]
