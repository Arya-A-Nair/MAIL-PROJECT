from operator import mod
from sqlite3 import Timestamp
from django.db import models

# Create your models here.

class Users(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.TextField()
    password=models.TextField()

class mail(models.Model):
    id=models.AutoField(primary_key=True)
    sender=models.TextField()
    recipient=models.TextField()
    subject=models.TextField()
    body=models.TextField()
    timestamp=models.DateTimeField(auto_now_add=True)
    read=models.BooleanField(default=False)
    archived=models.BooleanField(default=False)



