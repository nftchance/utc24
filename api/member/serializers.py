from rest_framework import serializers

from .models import Member, MemberAddress

class MemberAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberAddress
        fields = ['address', 'primary']

class MemberSerializer(serializers.ModelSerializer):
    addresses = MemberAddressSerializer(many=True, read_only=True) 

    class Meta:
        model = Member
        fields = '__all__'