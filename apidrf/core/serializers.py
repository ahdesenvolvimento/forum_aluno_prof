from rest_framework import serializers
from .models import *

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('first_name', 'last_name', 'username', 'password', 'email')

    # def create(self, vali)

class SalaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sala
        fields = ['entrar', 'descricao', 'tags', 'dono']