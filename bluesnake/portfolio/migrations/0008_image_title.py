# Generated by Django 3.1.7 on 2022-06-20 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0007_auto_20220620_1516'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='title',
            field=models.CharField(default='', max_length=255),
        ),
    ]
