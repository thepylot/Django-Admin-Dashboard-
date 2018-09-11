from django.shortcuts import render,HttpResponse,get_object_or_404,HttpResponseRedirect,redirect,Http404
from .models import Attend
from .forms import AttendForm
from django.contrib import messages
from django.core.mail import send_mail
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required()

def icaze_detail(request, id):
    icaze = get_object_or_404(Attend, id=id)
    context = {
         'icaze':icaze,
         
    }
  
    return render(request, 'icazeler/detail.html', context)

@login_required()
def icaze_create(request):
    form = AttendForm()
    context = {
        'form':form,
    }
    
    if request.method == "POST":
       
         form = AttendForm(request.POST or None)
         if form.is_valid():
            icaze =  form.save()
            user = request.user
            # send_mail('Hello from itcity','Hello there.This is an automated message.','charliescene512@gmail.com',['ximaye@pay-mon.com'],fail_silently=False)
            # messages.success(request, 'Isteyiniz Gonderildi!')
            return HttpResponseRedirect("http://127.0.0.1:8000/icazeler/index/")
            


        #SAVE

    else:
         form = AttendForm()
    icazeler = Attend.objects.all()
    context = {
        'form':form,
        'icazeler':icazeler,
        
    }
        #show    
    return render (request, 'icazeler/form.html',context)
@login_required()
def icaze_update(request, id):
    icaze = get_object_or_404(Attend, id=id)
    form = AttendForm(request.POST or None, instance = icaze)
    if form.is_valid():
        form.save()
        return HttpResponseRedirect(icaze.get_absolute_url())

    context = {
        'form':form,
    }    

    return render(request, 'icazeler/icazeupdate.html', context)
    
   
@login_required()
def icaze_delete(request, id):
    icaze = get_object_or_404(Attend, id=id)
    icaze.delete()
    
    return HttpResponseRedirect("http://127.0.0.1:8000/icazeler/index")


# def icaze_index(request):
#     icazeler = Attend.objects.all()
    
  
#     return render(request, 'icazeler/index.html', {'icazeler':icazeler})
        


 
    