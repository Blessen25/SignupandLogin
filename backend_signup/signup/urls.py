from django.urls import path
from . import views
from . views import login_view, signup

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', login_view, name='login'),
]
