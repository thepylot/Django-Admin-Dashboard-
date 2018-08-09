# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('icazeler', '0004_auto_20180809_1344'),
    ]

    operations = [
        migrations.AddField(
            model_name='attend',
            name='status',
            field=models.CharField(choices=[('gozleyir', 'GOZLEYIR'), ('tesdiq_olundu', 'TESDIQ OLUNUB'), ('tesdiq_olunmayib', 'TESDIQ OLUNMAYIB')], default='Gozleyir', max_length=4),
        ),
    ]
