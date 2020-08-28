from django.shortcuts import render


# Create your views here.
def forum_home(request):
    context = {
        "component_name": "forumHome"
    }
    return render(request, "base.html", context)
