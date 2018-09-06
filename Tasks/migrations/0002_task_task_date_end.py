# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('Tasks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='task_date_end',
            field=models.DateTimeField(default=datetime.datetime(2018, 9, 6, 6, 54, 4, 793068, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
