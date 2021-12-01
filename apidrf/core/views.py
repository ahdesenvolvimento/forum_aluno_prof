import re
from django.http import request
from django.http.response import JsonResponse
from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from django.contrib.auth import login, logout, authenticate
from .serializers import *
from .models import *

# Create your views here.
from rest_framework import generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import authentication_classes, permission_classes

from rest_framework_simplejwt.tokens import RefreshToken
# from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
# @authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def example_view(request, format=None):
    if request.method == 'POST':
        dados_usuario = request.data
        user = authenticate(
            request, username=dados_usuario['usuario'], password=dados_usuario['password'])
        if user is None:
            print('teste')
        else:
            login(request, user)
        # return Response(user)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(request):
    return JsonResponse({"teste": "teste"}, status=200, safe=False)


@api_view(['GET', 'POST'])
def create_usuario(request):

    dados_usuario = request.data
    if request.method == 'POST':
        serializer = UsuarioSerializer(data=dados_usuario, many=False)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse({'testando': 'testando'}, status=200, safe=False)


@api_view(['GET', 'DELETE'])
def delete_usuario(request, id):
    return JsonResponse({'testando': 'testando'}, status=200, safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_sala(request, id):
    dados_sala = request.data
    if request.method == 'GET':
        print(id)
        return JsonResponse({'200': '200'}, status=200, safe=False) if Sala.objects.filter(id=id).filter(entrar=True).exists() else JsonResponse({'404': '404'}, status=404, safe=False)

        # serializer = CheckSala(data=dados_sala, many=False)
        # if serializer.is_valid():
        #     serializer.save()
        # return JsonResponse({'testando':'testando'}, status=200, safe=False)
    return JsonResponse({'testando': 'testando'}, status=200, safe=False)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_salas(request):
    # dados_sala = request.data
    if request.method == 'GET':
        salas = SalaSerializer(Sala.objects.all(), many=True)
        return JsonResponse({'salas': salas.data}, status=200, safe=False)

        # serializer = CheckSala(data=dados_sala, many=False)
        # if serializer.is_valid():
        #     serializer.save()
        # return JsonResponse({'testando':'testando'}, status=200, safe=False)
    return JsonResponse({'testando': 'testando'}, status=200, safe=False)

@api_view(['POST', 'GET'])
# @permission_classes([IsAuthenticated])
def create_sala(request):
    dados_sala = request.data
    print(Sala.objects.all())
    if request.method == 'POST':
        print(Sala.objects.all())
        serializer = SalaSerializer(data=dados_sala, many=False)
        if serializer.is_valid():
            print('here')
            serializer.save()
        return JsonResponse({'testando': 'testando'}, status=200, safe=False)
    return JsonResponse({'testando': 'testando'}, status=200, safe=False)


@api_view(['DELETE'])
def delete_sala(request, id):
    sala = Sala.objects.filter(id=id)
    sala.delete()
    # dados_sala = request.data
    # if request.method == 'POST':
    #     serializer = SalaSerializer(data=dados_sala, many=False)
    #     if serializer.is_valid():
    #         serializer.save()
    #     return JsonResponse({'testando':'testando'}, status=200, safe=False)
    return JsonResponse({'testando': 'testando'}, status=200, safe=False)


@api_view(['POST', 'GET'])
def create_pergunta(request):
    dados_pergunta = request.data
    if request.method == 'POST':
        pergunta = Perguntas.objects.create(
            titulo=dados_pergunta['titulo'], corpo=dados_pergunta['corpo'], tags=dados_pergunta['tags'])
        pergunta_sala = PerguntaSala.objects.create(
            id_pergunta=pergunta, id_sala=Sala.objects.get(id=dados_pergunta['id']))
        print(PerguntaSala.objects.all())
        # serializer = SalaSerializer(data=dados_sala, many=False)
        # if serializer.is_valid():
        #     serializer.save()
        return JsonResponse({'testando': 'testando'}, status=200, safe=False)
    if request.method == 'GET':
        print(request.data)
        # serializer = CheckSala(data=dados_sala, many=False)
        # if serializer.is_valid():
        #     serializer.save()
        # return JsonResponse({'testando':'testando'}, status=200, safe=False)
    return JsonResponse({'testando': 'testando'}, status=200, safe=False)


@api_view(['POST', 'GET', 'PUT'])
def view_perguntas(request, id):
    if request.method == 'GET':
        perguntas = PerguntasSerializer(PerguntaSala.objects.select_related(
            'id_sala').filter(id_sala=id), many=True)
        return JsonResponse({'perguntas': perguntas.data}, status=200, safe=False)


@api_view(['PUT'])
def edit_pergunta(request, id):
    if request.method == 'PUT':
        Perguntas.objects.filter(id=id).update(status=True)
        print('entrei')
    return JsonResponse({'perguntas': '201'}, status=201, safe=False)


@api_view(['DELETE'])
def delete_pergunta(request, id):
    if request.method == 'DELETE':
        # print('entrei')
        # pergunta = get_object_or_404(Perguntas, id=id)
        # print(pergunta)
        # pergunta.delete()
        # print(Perguntas.objects.filter(id=id))
        Perguntas.objects.filter(id=id).delete()
        # perguntas = PerguntasSerializer(Perguntas.objects.all(), many=True)
        return JsonResponse({'perguntas': 'deletada'}, status=200, safe=False)
    return JsonResponse({'perguntas': 'deletada'}, status=404, safe=False)


@api_view(['POST'])
def resposta_sala(request, id):
    print(id)
    dados = request.data
    if request.method == 'POST':

        resposta = Resposta.objects.create(
            resposta=dados['resposta'], usuario=Usuario.objects.get(id=dados['usuario']))
        resposta_pergunta = PerguntaResposta.objects.create(
            id_pergunta=PerguntaSala.objects.get(id=id), id_resposta=resposta)
        print(PerguntaResposta.objects.filter(id_pergunta=id))
        return JsonResponse({'testando': 'testando'}, status=200, safe=False)
    return JsonResponse({'testando': 'testando'}, status=200, safe=False)


@api_view(['GET'])
def get_respostas(request, id):
    dados = request.data
    if request.method == 'GET':
        respostas = RespostasSerializer(
            PerguntaResposta.objects.filter(id_pergunta=id), many=True)
        return JsonResponse({"respostas": respostas.data}, status=200, safe=False)
    return JsonResponse({'testando': 'testando'}, status=200, safe=False)


@api_view(['POST', 'GET'])
def login_page(request):
    if request.method == 'POST':
        dados_usuario = request.data
        user = authenticate(
            request, username=dados_usuario['usuario'], password=dados_usuario['password'])
        if user is None:
            print('teste')
        else:
            login(request, user)
            print(dados_usuario)

    print(request.user)
    return JsonResponse({'success': '201'}, status=201, safe=False)


@permission_classes([IsAuthenticated])
class LogoutView(generics.GenericAPIView):
    serializer_class = LogoutSerializer
    # permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


def logout_page(request):
    logout()
