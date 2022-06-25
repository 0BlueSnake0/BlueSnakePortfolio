from django.db import models 
from datetime import date
from solo.models import SingletonModel


from ckeditor.fields import RichTextField
from phonenumber_field.modelfields import PhoneNumberField



class Image(models.Model):
    title = models.CharField(default='', max_length=255)
    file = models.ImageField(default='', upload_to="images/")


    def __str__(self):
        return f'{self.title} - "{self.file.url}" '


class SkillCategory(models.Model):
    title = models.CharField(default='', max_length=255)


    def __str__(self):
        return f'{self.title}'


class Skill(models.Model):
    title = models.CharField(default='', max_length=255, unique=True)
    icon = models.OneToOneField(Image, blank=True, null=True, on_delete=models.SET_NULL)
    category = models.ForeignKey(SkillCategory, null=True, default='', on_delete=models.CASCADE)


    def __str__(self):
        return f'{self.title}'


class Profile(models.Model):
    firstname = models.CharField(default='', max_length=255)
    lastname = models.CharField(default='', max_length=255)
    birthdate = models.DateField(default='01.01.1990')
    target_vacancy = models.CharField(default='', max_length=255)

    phone_number = PhoneNumberField(default='', unique=True)
    email = models.EmailField(default='', max_length=255, unique=True)
    github = models.URLField(default='', blank=True, max_length=255)
    linkedIn = models.URLField(default='', blank=True, max_length=255)
    telegram = models.URLField(default='', blank=True, max_length=255)

    avatar = models.ImageField(default='', blank=True, upload_to='images/profile_photos/')

    about = RichTextField(default='', blank=True)
    skills = models.ManyToManyField(Skill, blank=True)

    def __str__(self):
        return f'{self.firstname} {self.lastname}'


class ActiveProfile(SingletonModel):
    profile = models.OneToOneField(Profile, blank=True, null=True, on_delete=models.SET_NULL)



class Project(models.Model):
    name = models.CharField(default='', max_length=255)
    github = models.URLField(default='', max_length=255)
    preview = models.ImageField(default='', upload_to='images/project_previews/')
    description = RichTextField(default='', blank=True)
    profile = models.ForeignKey(Profile, default='', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.profile.firstname} {self.profile.lastname} - {self.name}'
