from django.urls import path
from .views import accept

urlpatterns = [
    path('data/', accept),
]