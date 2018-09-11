# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20180911_0651'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='fathername',
            field=models.CharField(default=datetime.datetime(2018, 9, 11, 7, 26, 33, 576530, tzinfo=utc), max_length=100),
            preserve_default=False,
        ),
    ]
