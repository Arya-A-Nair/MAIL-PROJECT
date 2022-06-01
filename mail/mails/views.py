from re import X
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import UsersSerializer , MailSerializer
from .models import Users,mail
from mails import serializer
# Create your views here.


@api_view(['GET'])
def index(request):
    mails=Users.objects.all()
    serializer=UsersSerializer(mails,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def userregistered(request):
    serializer=UsersSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['POST'])
def checkUser(request):
    x=request.data["name"]
    user=Users.objects.get(name=x)
    serializer=UsersSerializer(user)
    if (serializer.data["password"]!=request.data["password"]):
        return Response({"status":False})
    else:
        return Response({"status":True,"id":serializer.data["id"]})

@api_view(['POST'])
def findName(request):
    user=Users.objects.get(id=request.data["id"])
    serializer=UsersSerializer(user)
    return Response({"name":serializer.data["name"]})

@api_view(['POST'])
def inbox(request):
    mails= mail.objects.filter(recipient=request.data["recipient"],archived=False)
    serializer=MailSerializer(mails,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def sent(request):
    mails= mail.objects.filter(sender=request.data["sender"])
    serializer=MailSerializer(mails,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def compose(request):
    serializer=MailSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response({"status":True})

@api_view(['POST'])
def archive(request):
    mails= mail.objects.filter(recipient=request.data["recipient"],archived=True)
    serializer=MailSerializer(mails,many=True)
    return Response(serializer.data)


@api_view(['POST'])
def emailDetailview(request):
    mails= mail.objects.filter(id=request.data["id"],recipient=request.data["recipient"])
    serializer=MailSerializer(mails,many=True)
    return Response(serializer.data)

