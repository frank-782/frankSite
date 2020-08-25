from django.shortcuts import render,redirect
from django.contrib import messages, auth
from django.contrib.auth.models import User
from django.http import HttpResponseNotAllowed
# Create your views here.

def user_home(request,user):
    pass


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username,password=password)
        if user is None:
            messages.error(request,'用户名或密码错误')
            return redirect('/users/login/')
    if request.user.is_authenticated:
        messages.info(request,'你已经登录了'+request.user.username+'，可通过此表单登录其他账号')
    return render(request,'users/login.html',{'next':request.GET.get('next')})

def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        repassword = request.POST['repassword']
        if username == '':
            messages.error(request,'用户名不能为空')
            return redirect('/users/register/')
        elif password == '':
            messages.error(request, '密码不能为空')
            return redirect('/users/register/')
        elif password != repassword:
            messages.error(request,'密码和确认密码不一致')
            return redirect('/users/register/')
        user = User.objects.create_user(username,email,password)
        user.save()
        auth.login(request,user)
        return redirect('/welcome/')

    return render(request,'users/register.html')

def logout(request):
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    auth.logout(request)