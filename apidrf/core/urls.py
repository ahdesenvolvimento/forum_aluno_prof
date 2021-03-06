from django.urls import path
from .views import LogoutView, create_pergunta, create_sala, create_usuario, delete_pergunta, delete_sala, edit_pergunta, get_respostas, get_salas, index, resposta_sala, view_perguntas, view_sala
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', index, name='index'),
    path('sala/', create_sala, name='create_sala'),
    path('sala/<int:id>', view_sala, name='view_sala'),
    path('sala/delete/<int:id>', delete_sala, name='delete_sala'),
    path('usuario/', create_usuario, name='create_usuario'),
    # path('usuario/delete/<int:id>', delete_usuario, name='delete_usuario'),
    path('pergunta/', create_pergunta, name='create_pergunta'),
    path('pergunta/<int:id>', view_perguntas, name='view_perguntas'),
    path('pergunta/edit/<int:id>', edit_pergunta, name='edit_pergunta'),
    path('pergunta/delete/<int:id>', delete_pergunta, name='delete_pergunta'),
    path('resposta/<int:id>', resposta_sala, name="resposta_sala"),
    path('get_respostas/<int:id>', get_respostas, name="get_respostas"),
    path('get_salas/', get_salas, name="get_salas"),
    path('logout/', LogoutView.as_view(), name='auth_logout'),

]

urlpatterns += [
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh', TokenRefreshView.as_view()),
]
