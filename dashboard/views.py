from django.shortcuts import render, redirect, get_object_or_404

from django.contrib.auth.decorators import login_required
from accounts.models import UserProfile
from django.contrib.auth.models import User

# Create your views here.
@login_required()
def dash_view(request):
    if request.user.is_authenticated():
         profile = get_object_or_404(UserProfile, user=request.user)
         context = {
             'profile':profile
         }



    return render(request, 'index.html', context)






