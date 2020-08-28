from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import User


# Create your models here.


class Tag(models.Model):
    name = models.CharField(verbose_name='名字', max_length=100)
    
    class Meta:
        verbose_name = '标签'
        verbose_name_plural = verbose_name
        
    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(verbose_name='名字', max_length=100)
    
    class Meta:
        verbose_name = '分类'
        verbose_name_plural = verbose_name
        
    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(verbose_name='标题', max_length=65)  # 文章标题
    body = models.TextField(verbose_name='内容')  # 文章内容
    create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now)  # 创建时间
    modified_time = models.DateTimeField(verbose_name='修改时间')  # 修改时间
    category = models.ForeignKey(Category, verbose_name='分类', on_delete=models.CASCADE)  # 文章分类
    tags = models.ManyToManyField(Tag,verbose_name='标签', blank=True)  # 文章标签
    author = models.ForeignKey(User,verbose_name='作者', on_delete=models.CASCADE)  # 文章作者
 
    class Meta:
        verbose_name = '文章'
        verbose_name_plural = verbose_name
        
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        self.modified_time = timezone.now()
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('blogs:detail', kwargs={'pk': self.pk})
