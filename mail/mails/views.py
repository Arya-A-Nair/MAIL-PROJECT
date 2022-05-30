from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import UsersSerializer
from .models import Users
# Create your views here.


@api_view(['GET'])
def index(request):
    mails=Users.objects.all()
    serializer=UsersSerializer(mails,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def userregistered(request):
    serializer=UsersSerializer(data=request.data)
    print(request.data)
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

