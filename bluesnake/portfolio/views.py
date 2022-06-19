from django.shortcuts import render
from django.conf import settings

def portfolio(request):    
    return render(
        request, 
        template_name='portfolio.html',
        context={}
    )