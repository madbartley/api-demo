from .serializer import JobSerializer

# Create your views here.

from rest_framework import viewsets
from jobs.models import Jobs



class JobsViewSet(viewsets.ModelViewSet):
    queryset = Jobs.objects.all()
    serializer_class = JobSerializer

    '''def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Jobs.objects.create()'''

