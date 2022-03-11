from django.contrib import admin
from .models import newUser
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea

# Register your models here.
class UserAdminConfig(UserAdmin):
    model = newUser
    ordering = ('start_date',)
    list_display = ('email', 'username', 'firstname', 'lastname', 'is_active', 'is_staff')

    admin.sit.register(newUser, UserAdminConfig)