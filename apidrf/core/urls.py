from django.urls import path
from .views import create_sala, create_usuario, delete_sala, delete_usuario, index

urlpatterns = [
    path('', index, name='index'),
    path('sala/', create_sala, name='create_sala'),
    path('sala/delete/<int:id>', delete_sala, name='delete_sala'),
    path('usuario/', create_usuario, name='create_usuario'),
    path('usuario/delete/<int:id>', delete_usuario, name='delete_usuario'),
]