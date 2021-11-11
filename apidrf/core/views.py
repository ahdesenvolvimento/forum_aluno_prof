from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import *
from .models import *
# Create your views here.


@api_view(['GET'])
def index(request):
    return JsonResponse({"teste":"teste"}, status=200, safe=False)

@api_view(['GET', 'POST'])
def create_usuario(request):
    print(Usuario.objects.all())
    for i in Usuario.objects.all():
        print(i.email)
    print(request.data)
    # user = Usuario.objects.create(username="123", email="teste2sad123121@gmail.com", nome="nome", password="1231321321")
    dados_usuario = request.data
    if request.method == 'POST':
        serializer = UsuarioSerializer(data=dados_usuario, many=False)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse({'testando':'testando'}, status=200, safe=False)


@api_view(['GET', 'DELETE'])
def delete_usuario(request, id):
    return JsonResponse({'testando':'testando'}, status=200, safe=False)

@api_view(['POST', 'GET'])
def create_sala(request):
    dados_sala = request.data
    if request.method == 'POST':
        serializer = SalaSerializer(data=dados_sala, many=False)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse({'testando':'testando'}, status=200, safe=False)
    return JsonResponse({'testando':'testando'}, status=200, safe=False)

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
    return JsonResponse({'testando':'testando'}, status=200, safe=False)


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