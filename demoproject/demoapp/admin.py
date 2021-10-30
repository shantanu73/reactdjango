from django.contrib import admin
from .models import Demo


class DemoAdmin(admin.ModelAdmin):
    list_display = ['first_name']

# Register your models here.


admin.site.register(Demo, DemoAdmin)
