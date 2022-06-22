from django.urls import path, include
from .views import portfolioView
 
 
app_name="portfolio"
urlpatterns = [
    path("", portfolioView, name='mainpage'),
]
