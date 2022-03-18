from django.shortcuts import render

# Create your views here.


def home(request):
    template_name = 'libshare/home.html'
    context = {}
    return render(
        request=request,
        template_name=template_name,
        context=context
    )


def registration(request):
    template_name = 'libshare/registration.html'
    context = {}
    return render(
        request=request,
        template_name=template_name,
        context=context
    )


def connection(request):
    template_name = 'libshare/connection.html'
    context = {}
    return render(
        request=request,
        template_name=template_name,
        context=context
    )


def dashboard(request):
    template_name = 'libshare/dashboard.html'
    context = {}
    return render(
        request=request,
        template_name=template_name,
        context=context
    )


def exit(request):
    template_name = 'libshare/exit.html'
    context = {}
    return render(
        request=request,
        template_name=template_name,
        context=context
    )


def contacts(request):
    template_name = 'libshare/contacts.html'
    context = {}
    return render(
        request=request,
        template_name=template_name,
        context=context
    )


def about(request):
    template_name = 'libshare/about.html'
    context = {}
    return render(
        request=request,
        template_name=template_name,
        context=context
    )
