# Generated by Django 4.0.4 on 2022-06-29 05:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0027_alter_skill_icon_alter_workexpirience_company_logo_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='about',
            new_name='summary',
        ),
    ]
