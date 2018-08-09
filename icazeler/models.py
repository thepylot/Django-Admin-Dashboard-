from django.db import models
from django.core.urlresolvers import reverse
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Attend(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default = 1)
    STATUS_CHOICES = (

        ('gozleyir', 'GOZLEYIR'),
        ('tesdiq olundu', 'TESDIQ OLUNUB'),
        ('tesdiq olunmayib', 'TESDIQ OLUNMAYIB'),
    )
    LEAVE_CHOICES = (
    ('xeste','XESTE'),
    ('tetil', 'TETIL'),
    ('bayram','BAYRAM'),
    
    )
    leave_type = models.CharField(max_length=6, choices=LEAVE_CHOICES, default='seçilməyib',verbose_name = 'Icazə Tipi')
    leave_start = models.DateTimeField(verbose_name = 'Baslangic Tarixi')
    leave_end = models.DateTimeField(verbose_name = 'Bitme Tarixi')
    leave_reason = models.CharField(max_length = 300, verbose_name = 'Movzu')
    status = models.CharField(max_length = 30, choices = STATUS_CHOICES, default = "Gozleyir")

    def get_absolute_url(self):
        return reverse ('detail', kwargs = {'id': self.id})
    
   
