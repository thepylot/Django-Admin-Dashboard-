from django.conf.urls import include, url
from .views import *

app_name = 'task'

urlpatterns = [


    url(r'^indextask/$', task_index, name='taks_index'),


]