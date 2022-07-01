from django.shortcuts import render
from django.conf import settings
from .models import ActiveProfile

from django.core.exceptions import ObjectDoesNotExist


def portfolio(request, **kwargs):

    try:
        currentProfile = ActiveProfile.objects.all()[:1].get().profile
    except ObjectDoesNotExist:
        return render(
            request,
            template_name='portfolio/profile_not_found.html',
        )

    return render(
        request, 
        template_name='portfolio/portfolio.html',
        context={
            'slideTitles': [
                'Hi!',
                'About',
                'Skills',
                'Projects',
                'Expirience',
                'Contact me'
                ],
            'currentProfile':currentProfile,
        }
    )


def page_not_found(request, exception):
    return render(
        request,
        template_name='page_not_found.html'
        )
