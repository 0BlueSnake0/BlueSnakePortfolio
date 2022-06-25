from django.contrib import admin
from django.contrib.auth.models import Group, User
from django.utils.safestring import mark_safe
from .models import Image, Skill, SkillCategory, Profile, ActiveProfile, Project


admin.site.unregister(Group)
admin.site.unregister(User)
admin.site.site_header = "Portfolio management"

@admin.register(Image)
class Image(admin.ModelAdmin):
    list_display = [
        'get_image',
        'title',
        'file'
    ]
    
    def get_image(self, obj):
        html=f"""
            <img src="{obj.file.url}" style="width:8em;height:8em;">
        """
        return mark_safe(html)
    get_image.short_description=""


@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = [
        'title',
        'get_skills'
    ]


    def get_skills(self, obj):
        all_skills = Skill.objects.filter(category=obj)
        html = """
            <style>
                p {
                    color:#144ec9;
                    font-family:sans-serif;
                    font-size:18px;
                    font-weight:800;
                    text-decoration: none;
                }
            </style>
            <div style="display:flex;flex-wrap:wrap;width:18em;justify-content:center;">
        """
        
        for skill in all_skills:
            if skill.icon and skill.icon.file.url:
                html += f"""
                    <img src="{skill.icon.file.url}" style="margin:1em;width:4em;height:4em;"> 
                """
            else:
                html += f"""
                    <p>{skill.title}</p> 
                """
        html+= "</div>"

        return mark_safe(html)

    get_skills.short_description = "Added skills"


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = [
        'get_icon', 
        'title',
    ]
    def get_icon(self, obj):
        html = """
            <img src="/static/images/icons/skill-default.png" style="width:6em;height:6em;border-radius:50%;">
        """
        if obj.icon:
                html = f"""
                <img src="{obj.icon.file.url}" style="width:6em;height:6em;border-radius:50%;">
            """
            
        return mark_safe(html)
    get_icon.short_description = "Icon"



@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = [
        'get_photo', 
        'firstname', 'lastname',
        'target_vacancy',
        'get_skills',
        'get_contacts'
    ]


    def get_photo(self, obj):
        html = """
            <img src="/static/images/icons/default-profile.png" style="width:6em;height:6em;border-radius:50%;">
        """
        if obj.avatar and obj.avatar.url:
                html = f"""
                <img src="{obj.avatar.url}" style="width:6em;height:6em;border-radius:50%;">
            """
            
        return mark_safe(html)


    get_photo.short_description = "Avatar"

    
    def get_contacts(self, obj):
        styles = """
            <style>
                a {
                    margin:0.5em;
                    color:#144ec9;
                    font-family:sans-serif;
                    font-size:14px;
                    font-weight:600;
                    text-decoration: none;
                }
                a:hover {
                    color:#6b9aff;
                }
            </style>
        """
        phone = f"""
            <a href="tel:{obj.phone_number}" target="_blank">
            {obj.phone_number}
            </a>                                
        """
        email = f"""
            <a href="mailto:{obj.email}" target="_blank">
            {obj.email}
            </a>
        """
        github = f""""""
        telegram = f""""""
        linkedIn = f""""""

        if obj.github:
            github = f"""
                <a href="{obj.github}" target="_blank">
                <img src="/static/images/icons/github.png" style="width:3em;height:3em;border-radius:50%;"> 
                </a>
            """
        if obj.linkedIn:
            linkedIn = f""" 
                <a href="{obj.linkedIn}" target="_blank" >
                <img src="/static/images/icons/linkedIn.png" style="width:3em;height:3em;border-radius:50%;">
                </a>
            """
        if obj.telegram:
            telegram = f"""   
                <a href="{obj.telegram}" target="_blank">
                <img src="/static/images/icons/telegram.png" style="width:3em;height:3em;border-radius:50%;"> 
                </a>
            """

        html = f"""
                    {styles}
                    <div>{email}</div>
                    <div>{phone}</div>
                    <div style="display:flex;"> 
                    {github}
                    {linkedIn}
                    {telegram}
                    </div>
                """
        return mark_safe(html)

        
        
    def get_skills(self, obj):
        html = """
            <style>
                p {
                    color:#144ec9;
                    font-family:sans-serif;
                    font-size:18px;
                    font-weight:800;
                    text-decoration: none;
                }
            </style>
            <div style="display:flex;flex-wrap:wrap;width:18em;justify-content:center;">
        """
        
        for skill in obj.skills.all():
            if skill.icon and skill.icon.file.url:
                html += f'<img src="{skill.icon.file.url}" style="margin:1em;width:4em;height:4em;">'
            else:
                html += f"""
                    <p>{skill.title}</p> 
                """
        html+= "</div>"
        return mark_safe(html)
    get_skills.short_description = "Skills"


@admin.register(ActiveProfile)
class ActiveProfileAdmin(admin.ModelAdmin):
    list_display = [
        'get_profile'
    ]

    def get_profile(self, obj):
        html = ""
        if (obj.profile is not None):
            html = f'<a href="/admin/{obj._meta.app_label}/{obj._meta.model_name}/{obj.pk}/change">{obj.profile.firstname} {obj.profile.lastname}</a>'
        return mark_safe(html)

    get_profile.short_description = ""



@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = [
        'get_preview',
        'name',
        'get_github',
        'profile',
        'have_slideshow'
    ]

    def get_preview(self, obj):
        html = """
            <img src="/static/images/icons/project-default-preview.png" style="width:8em;height:8em;">
        """
        if obj.preview and obj.preview.url:
                html = f"""
                <img src="{obj.preview.url}" style="width:8em;height:8em;">
            """
        return mark_safe(html)
    get_preview.short_description = "Preview"
    
    
    def get_github(self, obj):
        html = f"""
            <a href="{obj.github}" target="_blank">
            <img src="/static/images/icons/github.png" style="width:3em;height:3em;border-radius:50%;"> 
            </a>
        """
        return mark_safe(html)
    get_github.short_description = "GitHub"

    
    def have_slideshow(self, obj):
        activity_image = "not-active.png"
        if obj.slideshow:
            activity_image = "active.png"

        html = f"""
            <img src="/static/images/icons/{activity_image}" style="width:3em;height:3em;border-radius:50%;">
        """

        return mark_safe(html)

    have_slideshow.short_description = "Slideshow"
