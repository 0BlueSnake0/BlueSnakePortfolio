from django.contrib import admin
from .models import Engineer, Project, Skill


@admin.register(Engineer)
class EngineerAdmin(admin.ModelAdmin):
    pass


@admin.register(Skill)
class EngineerAdmin(admin.ModelAdmin):
    pass


@admin.register(Project)
class EngineerAdmin(admin.ModelAdmin):
    pass