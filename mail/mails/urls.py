from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.index),
    path('register/',views.userregistered),
    path('login/',views.checkUser),
    path('find/',views.findName),
    path('inbox/',views.inbox),
    path('sent/',views.sent),
    path('compose/',views.compose),
    path('archive/',views.archive),
    path('emailDetailview/',views.emailDetailview),
]