# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('icazeler', '0005_attend_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attend',
            name='status',
            field=models.CharField(choices=[('gozleyir', 'GOZLEYIR'), ('tesdiq olundu', 'TESDIQ OLUNUB'), ('tesdiq olunmayib', 'TESDIQ OLUNMAYIB')], default='Gozleyir', max_length=30),
        ),
    ]
