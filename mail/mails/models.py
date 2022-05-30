from django.db import models

# Create your models here.

class Users(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.TextField()
    password=models.TextField()

