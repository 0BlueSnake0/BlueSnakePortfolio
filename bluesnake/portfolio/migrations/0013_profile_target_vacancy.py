# Generated by Django 3.1.7 on 2022-06-20 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0012_slideshow_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='target_vacancy',
            field=models.CharField(default='', max_length=255),
        ),
    ]