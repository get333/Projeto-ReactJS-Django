from django.contrib import admin
from Escola.models import Aluno

# Register your models here.
class Alunos(admin.ModelAdmin):
    list_display = ('id','nome','cpf','email')
    list_display_links = ('id','nome')
    search_fields = ('nome',"cpf",)
admin.site.register(Aluno, Alunos)