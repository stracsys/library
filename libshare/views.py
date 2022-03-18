from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

# Create your views here.


def home(request):
    template = loader.get_template('libshare/home.html')
    context = {}
    return HttpResponse(template.render(context, request))
