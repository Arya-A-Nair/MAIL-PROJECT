from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.index),
    path('register/',views.userregistered),
    path('login/',views.checkUser),
    path('find/',views.findName)
]