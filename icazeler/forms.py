from django import forms
from .models import Attend
from django.forms import widgets
from django.contrib.admin.widgets import AdminDateWidget,AdminTimeWidget
from django.forms.extras.widgets import SelectDateWidget


class DateInput(forms.DateInput):
    input_type = 'date'
class TimeInput(forms.TimeInput):
    input_type = 'time'
        


class AttendForm(forms.ModelForm):
    leave_start =  forms.DateTimeField(widget=forms.SplitDateTimeWidget(),label = 'Baslangic Tarixi ve Saati')
    leave_end =  forms.DateTimeField(widget=forms.SplitDateTimeWidget(),label = 'Bitme Tarixi ve Saati' )
   

    class Meta:
        model = Attend
        fields = [
            'leave_type',
            'leave_start',
            'leave_end',
            'leave_reason',
        ]
   