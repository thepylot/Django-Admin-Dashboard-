from django.conf.urls import include, url
from .views import *


app_name = 'icazeler'




urlpatterns = [

  
    url(r'^(?P<id>\d+)/detail/$', icaze_detail, name = 'detail'),
    url(r'^index/$', icaze_create, name = 'create'),
    url(r'^(?P<id>\d+)/update/$', icaze_update, name = 'update'),
    url(r'^(?P<id>\d+)/delete/$', icaze_delete, name = 'delete'),

]