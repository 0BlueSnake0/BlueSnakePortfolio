# Generated by Django 4.0.4 on 2022-07-14 16:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0034_rename_skills_profile_hard_skills_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='soft_skills',
        ),
    ]
