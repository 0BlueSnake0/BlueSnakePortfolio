from django.shortcuts import render
from django.conf import settings
from .models import Profile


def portfolio(request):   
    allProfiles = Profile.objects.all()
    currentProfile = Profile.objects.get(is_active_profile=True)

    profile_data = {
        "currentProfile":currentProfile,
    } 

    return render(
        request, 
        template_name='portfolio.html',
        context=profile_data
    )