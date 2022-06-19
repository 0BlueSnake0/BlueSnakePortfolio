from django.urls import path, include
from .views import portfolio
 
 
urlpatterns = [
    path("", portfolio, name='portfolio'),
]
