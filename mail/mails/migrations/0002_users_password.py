# Generated by Django 4.0.4 on 2022-05-30 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mails', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='password',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
    ]
