# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('website', models.URLField(default=b'', blank=True)),
                ('bio', models.TextField(default=b'', blank=True)),
                ('phone', models.CharField(default=b'', max_length=20, blank=True)),
                ('city', models.CharField(default=b'', max_length=100, blank=True)),
                ('country', models.CharField(default=b'', max_length=100, blank=True)),
                ('organization', models.CharField(default=b'', max_length=100, blank=True)),
                ('user', models.OneToOneField(related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
