from rest_framework.viewsets import ModelViewSet

from investors.api.serializers import InvestorSerializer
from investors.models import Investor


class InvestorViewSet(ModelViewSet):
    serializer_class = InvestorSerializer
    queryset = Investor.objects.all().order_by('id')
    permission_classes = []
