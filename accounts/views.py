from django.shortcuts import render, redirect, get_object_or_404
from .forms import LoginForm
from django.contrib.auth import authenticate, login
from django.shortcuts import render, HttpResponseRedirect
from django.contrib.auth.models import User
from .models import UserProfile


# Create your views here.

def login_view(request):
    form = LoginForm(request.POST or None)
    if form.is_valid():
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
        user = authenticate(username = username, password = password)
        login(request, user)
        return redirect('http://127.0.0.1:8000/')
    return render(request, 'accounts/login.html', {'form':form})

def profile_view (request):
    profile = get_object_or_404(UserProfile, user=request.user)
    context = {
        'profile':profile
    }
    
    return render(request, 'accounts/account_update.html', context)



