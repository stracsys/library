from django.urls import path

from . import views

app_name = 'libshare'
urlpatterns = [
    path('', views.home, name='home'),
    path('registration', views.registration, name='registration'),
    path('connection', views.connection, name='connection'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('exit', views.exit, name='exit'),
    path('contacts', views.contacts, name='contacts'),
    path('about', views.about, name='about'),
]
