from rest_framework import serializers
from .models import Users, mail

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

class MailSerializer(serializers.ModelSerializer):
    class Meta:
        model = mail
        fields = '__all__'