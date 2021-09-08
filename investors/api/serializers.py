from rest_framework import serializers

from investors.models import Investor


class InvestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investor
        fields = ['id', 'email', 'name', 'allocation', 'equity']