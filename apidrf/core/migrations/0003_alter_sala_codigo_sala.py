# Generated by Django 3.2.8 on 2021-10-28 19:18

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_sala_dono'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sala',
            name='codigo_sala',
            field=models.UUIDField(blank=True, default=uuid.uuid4, null=True),
        ),
    ]