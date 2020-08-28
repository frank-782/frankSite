from django.contrib import admin
from django.urls import path, include
from .views import forum_home

urlpatterns = [
    path('', forum_home)
]
