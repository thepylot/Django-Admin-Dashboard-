# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20180911_0629'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='email',
            field=models.CharField(default=datetime.datetime(2018, 9, 11, 6, 50, 53, 597074, tzinfo=utc), max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='firstname',
            field=models.CharField(default=datetime.datetime(2018, 9, 11, 6, 51, 0, 590615, tzinfo=utc), max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='lastname',
            field=models.CharField(default=datetime.datetime(2018, 9, 11, 6, 51, 11, 615274, tzinfo=utc), max_length=100),
            preserve_default=False,
        ),
    ]
