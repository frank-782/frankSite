from django.contrib import admin
from django.urls import path, include
from . import views


app_name = 'blogs'
urlpatterns = [
    path('', views.blog_home, name='home'),
    path('posts/<int:pk>/', views.detail, name='detail'),
    path('archives/<int:year>/<int:month>/', views.archive, name='archive'),
    path('categories/<int:pk>/', views.category, name='category'),
    path('tags/<int:pk>/', views.tag, name='tag'),
    path('api/widget/', views.api_widget)
]
