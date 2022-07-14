# Generated by Django 4.0.4 on 2022-07-14 16:20

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0035_alter_profile_soft_skills_alter_profile_summary_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='soft_skills',
        ),
        migrations.AlterField(
            model_name='profile',
            name='summary',
            field=ckeditor.fields.RichTextField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=ckeditor.fields.RichTextField(blank=True, default='', max_length=500),
        ),
    ]