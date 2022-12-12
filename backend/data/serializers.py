from rest_framework import serializers
from .models import User

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    
    # def create(self, validated_data):
    #     return User.objects.create(validated_data)
    
    # def update(self, instance, validated_data):
    #     instance.name = validated_data.get('name', instance.name)
    #     instance.email = validated_data.get('email', instance.email)
    #     instance.age = validated_data.get('age', instance.age)
    #     instance.gender = validated_data.get('gender', instance.gender)
    #     instance.slot = validated_data.get('slot', instance.slot)
    #     instance.password = validated_data.get('password', instance.password)
    #     instance.save()
    #     return instance
    
    # def delete(self, instance):
    #     instance.delete()
    #     return instance