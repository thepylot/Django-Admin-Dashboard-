from django import forms
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import UserProfile
class LoginForm (forms.Form):
    username = forms.CharField(max_length=100, label = "Username")
    password = forms.CharField(max_length=100, label = 'Password', widget = forms.PasswordInput)

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        if username and password:
            user = authenticate(username = username, password = password)
            if not user:
                raise forms.ValidationError('Email ve ya Isci nomresi duzgun deyil!')
        return super(LoginForm, self).clean()    


        
class UserProfileForm(forms.ModelForm):

    class Meta:
        model = UserProfile
        fields = [
            'firstname',
            'lastname',
            'fathername',
            'email',
            'bio',
            'phone',
            'city',
            'country',
            'organization'
        ]

