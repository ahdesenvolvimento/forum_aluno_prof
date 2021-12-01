from django.core.serializers import serialize
from django.db.models import fields
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from .models import *
from django.contrib.auth.hashers import make_password


class UsuarioSerializer(serializers.ModelSerializer):
    def validate_password(self, value: str) -> str:
        return make_password(value)

    class Meta:
        model = Usuario
        fields = ('first_name', 'last_name', 'username', 'password', 'email')


class SalaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sala
        fields = ['entrar', 'descricao', 'tags', 'dono', 'id']


class CheckSala(serializers.ModelSerializer):
    class Meta:
        model = Sala
        fields = ['codigo_sala']


class PerguntaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perguntas
        fields = '__all__'


class PerguntasSerializer(serializers.ModelSerializer):
    id_pergunta = PerguntaSerializer()

    class Meta:
        model = PerguntaSala
        fields = ('data', 'hora', 'id', 'id_pergunta', 'id_sala')


class RespostaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resposta
        fields = '__all__'


class RespostasSerializer(serializers.ModelSerializer):
    id_resposta = RespostaSerializer()

    class Meta:
        model = PerguntaResposta
        fields = ('data', 'hora', 'id', 'id_resposta', 'id_pergunta')


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    default_error_messages = {
        'bad token': ('Token is expired or invalid')
    }

    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs

    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail('bad token')
