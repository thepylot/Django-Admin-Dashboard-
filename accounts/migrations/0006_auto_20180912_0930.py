# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20180912_0613'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='dayWorkStarted',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='dob',
            field=models.CharField(max_length=100),
        ),
    ]
