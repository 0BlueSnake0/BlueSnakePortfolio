# Generated by Django 3.1.7 on 2022-06-20 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0009_auto_20220620_1613'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='preview',
            field=models.ImageField(blank=True, default='', upload_to='images/project_previews/'),
        ),
    ]