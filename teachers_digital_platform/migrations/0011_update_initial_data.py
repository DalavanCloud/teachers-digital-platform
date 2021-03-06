# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import os
from django.db import migrations, models
from django.core import serializers

fixture_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../fixtures'))
fixture_filename = 'tdp_updated_council_for_ed_data.json'


def load_fixture(apps, schema_editor):
    fixture_file = os.path.join(fixture_dir, fixture_filename)

    with open(fixture_file, 'rb') as fixture:
        objects = serializers.deserialize('json', fixture, ignorenonexistent=True)
        for obj in objects:
            obj.save()


def unload_fixture(apps, schema_editor):
    """Brutally deleting all entries for these models..."""
    model_names = [
        "ActivityCouncilForEconEd",
    ]
    for model_name in model_names:
        MyModel = apps.get_model("teachers_digital_platform", model_name)
        MyModel.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('teachers_digital_platform', '0010_load_initial_data'),
    ]

    operations = [
        migrations.RunPython(load_fixture, reverse_code=unload_fixture),
    ]
