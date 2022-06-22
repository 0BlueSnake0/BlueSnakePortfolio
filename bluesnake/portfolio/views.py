from django.shortcuts import render
from django.conf import settings
from .models import Profile

from django.core.exceptions import ObjectDoesNotExist


def portfolioView(request, **kwargs):   
    allProfiles = Profile.objects.all() 

    return render(
        request, 
        template_name='portfolio/portfolio.html',
        context={
            
        }
    )