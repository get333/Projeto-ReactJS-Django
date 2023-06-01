from rest_framework import viewsets
from Escola.models import Aluno
from Escola.serializer import AlunoSerializer

class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer


