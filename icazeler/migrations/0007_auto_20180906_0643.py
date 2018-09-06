# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('icazeler', '0006_auto_20180809_1450'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attend',
            name='leave_type',
            field=models.CharField(max_length=6, choices=[(b'xeste', b'XESTE'), (b'tetil', b'TETIL'), (b'bayram', b'BAYRAM')]),
        ),
    ]
