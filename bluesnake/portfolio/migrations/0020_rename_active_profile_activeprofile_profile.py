# Generated by Django 4.0.4 on 2022-06-24 22:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0019_remove_profile_is_active_profile'),
    ]

    operations = [
        migrations.RenameField(
            model_name='activeprofile',
            old_name='active_profile',
            new_name='profile',
        ),
    ]
