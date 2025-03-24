from rest_framework import serializers
from jobs.models import Jobs 


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobs
        fields = ['id', 'school', 'grade', 'teacher', 'subject', 'accepted', 'accepted']