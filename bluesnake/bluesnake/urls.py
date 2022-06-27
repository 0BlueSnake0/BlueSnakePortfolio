from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include


handler404 = 'portfolio.views.page_not_found'

urlpatterns = [
    path("", include("portfolio.urls"), name="portfolio"),
    path('admin/', admin.site.urls), 
    path('ckeditor/', include('ckeditor_uploader.urls'))
]


urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
