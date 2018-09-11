from django.conf.urls import include, url
from .views import profile_view, login_view
from django.conf import settings 
from django.conf.urls.static import static 

app_name = 'accounts'




urlpatterns = [

  
    url(r'^login/$', login_view, name = 'login'),
    url(r'^profile/', profile_view, name='profile'),
   

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)