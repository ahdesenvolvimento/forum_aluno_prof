from django.contrib import admin
from .models import Usuario
# Register your models here.
from django.contrib.auth.admin import UserAdmin

admin.site.register(Usuario, UserAdmin)