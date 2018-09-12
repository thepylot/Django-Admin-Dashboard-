# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_userprofile_fathername'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='adress',
            field=models.CharField(default=datetime.datetime(2018, 9, 12, 6, 12, 55, 988551, tzinfo=utc), max_length=150),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='dayWorkStarted',
            field=models.DateField(default=datetime.datetime(2018, 9, 12, 6, 13, 1, 532341, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='department',
            field=models.CharField(default=datetime.datetime(2018, 9, 12, 6, 13, 8, 504897, tzinfo=utc), max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='dob',
            field=models.DateField(default=datetime.datetime(2018, 9, 12, 6, 13, 16, 134173, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='gender',
            field=models.CharField(default=datetime.datetime(2018, 9, 12, 6, 13, 24, 80377, tzinfo=utc), max_length=100, choices=[(b'male', b'Male'), (b'female', b'FEMALE')]),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='mobile',
            field=models.CharField(default=datetime.datetime(2018, 9, 12, 6, 13, 29, 948058, tzinfo=utc), max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='orgFilial',
            field=models.CharField(default=datetime.datetime(2018, 9, 12, 6, 13, 35, 953196, tzinfo=utc), max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='relatedPerson',
            field=models.CharField(default=datetime.datetime(2018, 9, 12, 6, 13, 41, 798493, tzinfo=utc), max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='relatedPersonMobile',
            field=models.CharField(default=datetime.datetime(2018, 9, 12, 6, 13, 47, 260489, tzinfo=utc), max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='rhBlood',
            field=models.CharField(default=datetime.datetime(2018, 9, 12, 6, 13, 56, 858678, tzinfo=utc), max_length=30),
            preserve_default=False,
        ),
    ]
