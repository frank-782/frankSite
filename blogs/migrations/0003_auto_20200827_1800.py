# Generated by Django 3.0.4 on 2020-08-27 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0002_auto_20200827_1759'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='create_time',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='post',
            name='modified_time',
            field=models.DateField(),
        ),
    ]
