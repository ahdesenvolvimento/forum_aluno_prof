from django.db import models
from django.db.models.expressions import F
from django.contrib.auth.models import BaseUserManager, AbstractUser
import uuid


class BaseManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username, password, **extrafields):
        if not username:
            raise ValueError('Informe o usuário')
        username = self.model.normalize_username(username)
        user = self.model(username=username, **extrafields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, password, **extrafields):
        extrafields.setdefault('is_staff', True)
        extrafields.setdefault('is_superuser', False)
        return self._create_user(username, password, **extrafields)

    def create_superuser(self, username, password, **extrafields):
        extrafields.setdefault('is_staff', True)
        extrafields.setdefault('is_superuser', True)

        if extrafields.get('is_staff') is not True:
            raise ValueError('Precisa ser true')
        if extrafields.get('is_superuser') is not True:
            raise ValueError('Precisa ser true')

        return self._create_user(username, password, **extrafields)


class Created(models.Model):
    data = models.DateField(auto_now_add=True, blank=True, null=True)
    hora = models.TimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
        abstract = True


# class Perfil(Created):
#     id = models.AutoField(primary_key=True)
#     perfil = models.CharField(max_length=255, blank=False, null=False)

#     class Meta:
#         db_table = 'perfil'


class Usuario(AbstractUser):
    # id = models.AutoField(primary_key=True)
    # nome = models.CharField(max_length=255, blank=False, null=False)
    email = models.EmailField(
        max_length=255, blank=False, null=False, unique=True)
    status = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']
    objects = BaseManager()

    class Meta:
        db_table = 'usuario'


# class UsuarioPerfil(Created):
#     id = models.AutoField(primary_key=True)
#     id_usuario = models.ForeignKey(
#         Usuario, on_delete=models.CASCADE, null=True, blank=True)
#     id_perfil = models.ForeignKey(
#         Perfil, on_delete=models.CASCADE, null=True, blank=True)

#     class Meta:
#         db_table = 'usuario_perfil'


class Sala(Created):
    id = models.AutoField(primary_key=True)
    codigo_sala = models.UUIDField(default=uuid.uuid4, blank=True, null=True)
    entrar = models.BooleanField(default=True, blank=True, null=True)
    descricao = models.TextField(blank=False, null=False)
    tags = models.CharField(max_length=500, blank=True, null=True)
    dono = models.ForeignKey(
        Usuario, null=True, blank=False, on_delete=models.CASCADE)

    class Meta:
        db_table = 'sala'


class UsuarioSala(Created):
    id = models.AutoField(primary_key=True)
    id_usuario = models.ForeignKey(
        Usuario, on_delete=models.CASCADE, null=True, blank=True)
    id_sala = models.ForeignKey(
        Sala, on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        db_table = 'usuario_sala'


class Perguntas(Created):
    id = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=255, blank=False, null=False)
    corpo = models.TextField(null=False, blank=False)
    status = models.BooleanField(default=False)
    tags = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        db_table = 'perguntas'


class PerguntaSala(Created):
    id = models.AutoField(primary_key=True)
    id_pergunta = models.ForeignKey(
        Perguntas, on_delete=models.CASCADE, null=True, blank=True)
    id_sala = models.ForeignKey(
        Sala, on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        db_table = 'pergunta_sala'


class Resposta(Created):
    id = models.AutoField(primary_key=True)
    resposta = models.TextField()
    usuario = models.ForeignKey(Usuario, null=True, blank=True)
    status = models.BooleanField(default=False)

    class Meta:
        db_table = 'resposta'


class PerguntaResposta(Created):
    id = models.AutoField(primary_key=True)
    id_pergunta = models.ForeignKey(PerguntaSala, null=True, blank=True)
    id_resposta = models.ForeignKey(Resposta, null=True, blank=True)

    class Meta:
        db_table = 'pergunta_resposta'


class Postagem(Created):
    id = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=255, null=False, blank=False)
    tags = models.CharField(max_length=255, null=True, blank=True)
    corpo = models.TextField()
    status = models.BooleanField(default=False)
    dono = models.ForeignKey(Usuario, null=False, blank=False)

    class Meta:
        db_table = 'postagem'

# class UsuarioPostagem(Created):
#     id = models.AutoField(primary_key=True)
#     id_postagem = models.ForeignKey(PerguntaSala, null=True, blank=True)
#     id_resposta = models.ForeignKey(Resposta, null=True, blank=True)
# class Postagem
