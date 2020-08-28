from django.shortcuts import render


# Create your views here.

def main_page(request):
    context = {"component_name": "Home"}
    return render(request, 'home.html', context)
