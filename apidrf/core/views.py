from django.http.response import JsonResponse
from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from .serializers import *
from .models import *
# Create your views here.


@api_view(['GET'])
def index(request):
    return JsonResponse({"teste": "teste"}, status=200, safe=False)


@api_view(['GET', 'POST'])
def create_usuario(request):
    dados_usuario = request.data
    if request.method == 'POST':
        serializer = UsuarioSerializer(data=dados_usuario, many=False)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse({'testando': 'testando'}, status=200, safe=False)


@api_view(['GET', 'DELETE'])
def delete_usuario(request, id):
    return JsonResponse({'testando': 'testando'}, status=200, safe=False)


@api_view(['GET'])
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


@api_view(['POST', 'GET'])
def create_sala(request):
    dados_sala = request.data
    print(Sala.objects.all())
    if request.method == 'POST':
        serializer = SalaSerializer(data=dados_sala, many=False)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse({'testando': 'testando'}, status=200, safe=False)
    if request.method == 'GET':
        print(request.data)
        # serializer = CheckSala(data=dados_sala, many=False)
        # if serializer.is_valid():
        #     serializer.save()
        # return JsonResponse({'testando':'testando'}, status=200, safe=False)
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


@api_view(['POST', 'GET'])
def view_perguntas(request, id):
    if request.method == 'GET':
        perguntas = PerguntasSerializer(Perguntas.objects.all(), many=True)
        return JsonResponse({'perguntas': perguntas.data}, status=200, safe=False)

@api_view(['DELETE'])
def delete_pergunta(request, id):
    if request.method == 'DELETE':
        pergunta = get_object_or_404(Perguntas, id)
        pergunta.delete()
        # perguntas = PerguntasSerializer(Perguntas.objects.all(), many=True)
        return JsonResponse({'perguntas': 'deletada'}, status=200, safe=False)

# def create_usuario(request):
#     print(Usuario.objects.all())
#     dados_usuario = request.data
#     # print(dados_usuario)
#     if request.method == 'POST':
#         serializer = UsuarioSerializer(data=dados_usuario, many=True)
#         print(serializer)
#         if serializer.is_valid():
#             # pass
#             serializer.save()
#         return JsonResponse(, status=200, safe=False)
