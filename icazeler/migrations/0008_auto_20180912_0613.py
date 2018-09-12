# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('icazeler', '0007_auto_20180906_0643'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attend',
            name='status',
            field=models.CharField(default=b'gozleyir', max_length=30, choices=[(b'gozleyir', b'GOZLEYIR'), (b'tesdiq olundu', b'TESDIQ OLUNUB'), (b'tesdiq olunmayib', b'TESDIQ OLUNMAYIB')]),
        ),
    ]
