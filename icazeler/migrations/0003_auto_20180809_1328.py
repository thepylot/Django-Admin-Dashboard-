# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('icazeler', '0002_auto_20180809_1016'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='attend',
            name='user',
        ),
        migrations.AddField(
            model_name='attend',
            name='author',
            field=models.ForeignKey(default=1, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
