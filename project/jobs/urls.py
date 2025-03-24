
from django.urls import path
from .views import JobsViewSet


job_list = JobsViewSet.as_view({
    'get': 'list',
    'post': 'create',
})

job_detail = JobsViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    path('jobs/', job_list),
    path('jobs/<int:pk>', job_detail)
]

