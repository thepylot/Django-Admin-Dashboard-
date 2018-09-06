from django.db import models
from django.core.urlresolvers import reverse
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default = 1)
    list_name = models.CharField(max_length = 40)
    task_name = models.CharField(max_length = 50)
    task_date_started = models.DateTimeField()
    task_date_end = models.DateTimeField()

    # def get_absolute_url(self):
    #     return reverse ('detail', kwargs = {'id': self.id})