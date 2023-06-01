from rest_framework import serializers
from Escola.models import Aluno

class AlunoSerializer(serializers.ModelSerializer):
    class Meta:
     model = Aluno
     fields = ('id','nome','cpf','email')
                    
