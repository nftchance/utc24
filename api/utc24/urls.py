from rest_framework import routers

from django.contrib import admin
from django.urls import include, path

from member.views import MemberViewSet
from project.views import ProjectViewSet

router = routers.DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'members', MemberViewSet)

urlpatterns = router.urls + [
    path('admin/', admin.site.urls),
    path('api/auth/', include('rest_framework.urls')),
]