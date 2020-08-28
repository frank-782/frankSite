from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Post, Tag, Category
from users.api import get_user
from .api import format_post


# Create your views here.
def blog_home(request):
    plist = Post.objects.all().order_by("-create_time")
    post_list = []
    for p in plist:
        post_list.append(format_post(p, excerpt=True))

    return render(request, 'base.html',
                  {
                      "component_name": "BlogHome",
                      "component_props": {"postList": post_list}
                  })


def detail(request, pk):
    p = get_object_or_404(Post, pk=pk)
    return render(request, 'blogs/detail.html',
                  {
                      "title": p.title,
                      "component_name": "BlogDetail",
                      "component_props": {"post": format_post(p)}
                  })


def category(request, pk):
    cate = get_object_or_404(Category, pk=pk)
    p = Post.objects.filter(category=cate).order_by('-create_time')
    post_list = []
    for p in p:
        post_list.append(format_post(p, excerpt=True))
    return render(request, 'base.html', context={
        "component_name": "BlogHome",
        "component_props": {"postList": post_list}
    })


def tag(request, pk):
    t = get_object_or_404(Tag, pk=pk)
    plist = Post.objects.filter(tags=t).order_by('-create_time')
    post_list = []
    for p in plist:
        post_list.append(format_post(p, excerpt=True))
    return render(request, 'base.html', context={
        "component_name": "BlogHome",
        "component_props": {"postList": post_list}
    })
    return render(request, 'base.html', context={'post_list': post_list})


def archive(request, year, month):
    plist = Post.objects.filter(create_time__year=year,
                                create_time__month=month
                                ).order_by('-create_time')
    post_list = []
    for p in plist:
        post_list.append(format_post(p, excerpt=True))
    return render(request, 'base.html', context={
        "component_name": "BlogHome",
        "component_props": {"postList": post_list}
    })


def api_widget(request):
    num = request.GET.get('num')
    if num is None:
        num = 5
    elif int(num) > 10:
        num = 10
    post = Post.objects.all().order_by('-create_time')[:num]
    archives = Post.objects.dates('create_time', 'month', order='DESC')
    tag = Tag.objects.all()
    category = Category.objects.all()
    archives_list = []
    post_list = []
    category_list = []
    tags = [{'pk': t.pk, 'name': t.name} for t in tag]
    for date in archives:
        archives_list.append({'year': date.year, 'month': date.month})
    for c in category:
        category_list.append({'pk': c.pk, 'name': c.name, 'count': 0})
    for p in post:
        post_list.append(format_post(p, excerpt=True))
    print(archives)
    return JsonResponse(
        {'recentPosts': post_list,
         'archives': archives_list,
         'tag': tags,
         'category': category_list
         }
    )
