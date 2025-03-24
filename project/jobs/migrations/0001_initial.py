# Generated by Django 5.1.6 on 2025-02-21 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Jobs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school', models.TextField()),
                ('grade', models.PositiveSmallIntegerField()),
                ('teacher', models.TextField()),
                ('subject', models.TextField()),
                ('accepted', models.BinaryField(default=False)),
            ],
            options={
                'ordering': ['school', 'grade', 'teacher', 'subject', 'accepted', 'accepted'],
            },
        ),
    ]
