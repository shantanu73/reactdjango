from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DemoSerializer
from .models import Demo


# Create your views here.

class DemoView(viewsets.ModelViewSet):
    serializer_class = DemoSerializer
    queryset = Demo.objects.all()
