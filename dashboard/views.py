from django.shortcuts import render,HttpResponse

# Create your views here.
def dash_view(request):
    if request.user.is_authenticated():
        context = {
           'name': 'Rashid'

            }
    else:
        context = {
           'name': 'Guest'

            }



    return render(request, 'dashboard.html', context)






