from re import X
from tabnanny import check
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import UsersSerializer , MailSerializer
from .models import Users,mail
from mails import serializer
# Create your views here.


@api_view(['POST'])
def userregistered(request):
    check=Users.objects.filter(name=request.data['name']).exists()
    if check==True:
        return Response({"message":"User already exists","status":False})
    else:
        serializer=UsersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
        return Response({'message':'User registered successfully','status':True})

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

@api_view(['POST'])
def emailRead(request):
    mails=mail.objects.get(id=request.data["id"])
    data1={
        "id":mails.id,
        "sender":mails.sender,
        "recipient":mails.recipient,
        "subject":mails.subject,
        "body":mails.body,
        "archived":mails.archived,
        "read":True
    }
    serializer=MailSerializer(instance=mails,data=data1)
    if serializer.is_valid():
        serializer.save()
    return Response({"status":True})


@api_view(['POST'])
def emailArchive(request):
    mails=mail.objects.get(id=request.data["id"])
    
    data1={
        "id":mails.id,
        "sender":mails.sender,
        "recipient":mails.recipient,
        "subject":mails.subject,
        "body":mails.body,
        "archived":request.data["archived"],
        "read":mails.read
    }
    serializer=MailSerializer(instance=mails,data=data1)
    if serializer.is_valid():
        serializer.save()
    return Response({"status":True})

    

