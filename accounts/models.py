from django.db import models
from django.contrib.auth.models import User
 
class UserProfile(models.Model):
    GENDER_CHOICES = (
    ('male','Male'),
    ('female', 'FEMALE'),
  
    )
   
    user = models.OneToOneField(User)
    avatar = models.ImageField()
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=100)
    fathername = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    bio = models.TextField(default='', blank=True)
    phone = models.CharField(max_length=20, blank=True, default='')
    mobile = models.CharField(max_length= 20)
    city = models.CharField(max_length=100, default='', blank=True)
    country = models.CharField(max_length=100, default='', blank=True)
    organization = models.CharField(max_length=100, default='', blank=True)
    orgFilial = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    dob = models.CharField(max_length=100)
    dayWorkStarted = models.CharField(max_length=100)
    gender = models.CharField(max_length=100, choices=GENDER_CHOICES)
    adress = models.CharField(max_length=150)
    rhBlood = models.CharField(max_length=30)
    relatedPerson = models.CharField(max_length=30)
    relatedPersonMobile = models.CharField(max_length=50)
    



        
    def __str__(self):
        return self.user.username



    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles' 
