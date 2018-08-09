# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('icazeler', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='attend',
            name='leave_endtime',
        ),
        migrations.RemoveField(
            model_name='attend',
            name='leave_starttime',
        ),
        migrations.AddField(
            model_name='attend',
            name='user',
            field=models.ForeignKey(default=1, to=settings.AUTH_USER_MODEL),
        ),
    ]
