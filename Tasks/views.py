from django.shortcuts import render,HttpResponse,get_object_or_404,HttpResponseRedirect,redirect,Http404

def task_index(request):
    return render (request, 'Tasks/Tasks.html')