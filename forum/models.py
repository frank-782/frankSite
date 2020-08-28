from django.db import models


# Create your models here.

class Topics(models.Model):
    pass


class Posts(models.Model):
    create_time = models.DateField(verbose_name='创建时间', auto_now_add=True)
    # author = models
    title = models.CharField(verbose_name='标题')
    content = models.TextField(verbose_name='内容')
