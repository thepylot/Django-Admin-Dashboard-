from django.db import models
from django.contrib.auth.models import User
 
class UserProfile(models.Model):
    user = models.OneToOneField(User)
    avatar = models.ImageField(upload_to='itcity/media/')
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=100)
    fathername = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    bio = models.TextField(default='', blank=True)
    phone = models.CharField(max_length=20, blank=True, default='')
    city = models.CharField(max_length=100, default='', blank=True)
    country = models.CharField(max_length=100, default='', blank=True)
    organization = models.CharField(max_length=100, default='', blank=True)
    



        
    def __str__(self):
        return self.user.username



    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles' 
