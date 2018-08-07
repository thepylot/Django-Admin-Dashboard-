# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Attend',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('leave_type', models.CharField(default='seçilməyib', choices=[('xeste', 'XESTE'), ('tetil', 'TETIL'), ('bayram', 'BAYRAM')], verbose_name='Icazə Tipi', max_length=6)),
                ('leave_start', models.DateTimeField(verbose_name='Baslangic Tarixi')),
                ('leave_starttime', models.DateTimeField(verbose_name='Baslangic Saat')),
                ('leave_end', models.DateTimeField(verbose_name='Bitme Tarixi')),
                ('leave_endtime', models.DateTimeField(verbose_name='Bitme Saat')),
                ('leave_reason', models.CharField(verbose_name='Movzu', max_length=300)),
            ],
        ),
    ]
