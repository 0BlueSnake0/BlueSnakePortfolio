# Generated by Django 4.0.4 on 2022-06-30 22:43

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0030_alter_project_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='description',
            field=ckeditor.fields.RichTextField(blank=True, default='', max_length=255),
        ),
    ]