from django.urls import path, include
from .views import portfolio, page_not_found
 
 
app_name="portfolio"
urlpatterns = [
    path("", portfolio, name='mainpage'),
]
