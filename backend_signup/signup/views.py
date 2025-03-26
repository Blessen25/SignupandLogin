from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User

# Create your views here.

def hello(request):
    return HttpResponse("Hello world")

@csrf_exempt
def signup(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data.get("username")
            email = data.get("email")
            password = data.get("password")
            confirm_password = data.get("confirmpassword")

            if User.objects.filter(username=username).exists():
                return JsonResponse({"error":"Username already taken"}, status = 400 )
            
            user = User.objects.create_user(username= username, email=email, password=password)
            return JsonResponse({'message':'User Created Successfully',"user_id":user.id})
    

        except Exception as e:
            return JsonResponse({"error":str(e)},status = 400)
        
    return JsonResponse({"error":"Invalid request method"},status = 405)   


@csrf_exempt
def login_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data.get("username")
            password = data.get("password")

            user = authenticate(username = username, password = password)
            if user:
                return JsonResponse({"message":"Login successful","user_id":user.id},status = 200)
            else:
                return JsonResponse({"error":"Invalid credentials"},status = 400)
        except Exception as e:
            return JsonResponse({"error":str(e)},status = 400)
    
    return JsonResponse({"error":"Invalid request method"},status = 405) 