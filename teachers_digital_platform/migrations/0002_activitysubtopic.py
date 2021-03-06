# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teachers_digital_platform', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ActivitySubTopic',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=255)),
                ('parent', models.ForeignKey(related_name='subtopics', default=None, blank=True, to='teachers_digital_platform.ActivityTopic', null=True)),
            ],
            options={
                'ordering': ['title'],
                'abstract': False,
            },
        ),
    ]
