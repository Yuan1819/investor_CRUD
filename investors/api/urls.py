from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from investors.api.views import InvestorViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("investors", InvestorViewSet)
urlpatterns = router.urls