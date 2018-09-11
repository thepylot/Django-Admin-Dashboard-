from django.shortcuts import render, redirect, get_object_or_404
from .forms import UserProfileForm
from django.contrib.auth import authenticate, login
from django.shortcuts import render, HttpResponseRedirect
from django.contrib.auth.models import User
from .models import UserProfile
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required()
def login_view(request):
    form = LoginForm(request.POST or None)
    if form.is_valid():
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
        user = authenticate(username = username, password = password)
        login(request, user)
        return redirect('http://127.0.0.1:8000/')
    return render(request, 'accounts/login.html', {'form':form})
@login_required()
def profile_view (request):
    profile = get_object_or_404(UserProfile, user=request.user)
    form = UserProfileForm()


    context = {
        'profile':profile,
        'form':form,
    }
    if request.method == "POST":
        form =UserProfileForm(request.POST or None, instance=profile)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('http://127.0.0.1:8000/accounts/profile/')


    
    return render(request, 'accounts/account_update.html', context)



