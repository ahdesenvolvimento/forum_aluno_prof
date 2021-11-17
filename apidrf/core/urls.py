from django.urls import path
from .views import create_pergunta, create_sala, create_usuario, delete_sala, delete_usuario, index, view_perguntas, view_sala

urlpatterns = [
    path('', index, name='index'),
    path('sala/', create_sala, name='create_sala'),
    path('sala/<int:id>', view_sala, name='view_sala'),
    path('sala/delete/<int:id>', delete_sala, name='delete_sala'),
    path('usuario/', create_usuario, name='create_usuario'),
    path('usuario/delete/<int:id>', delete_usuario, name='delete_usuario'),
    path('pergunta/', create_pergunta, name='create_pergunta'),
     path('pergunta/<int:id>', view_perguntas, name='view_perguntas'),
]