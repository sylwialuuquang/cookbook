from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from django.db.models.functions import Lower

from .models import Recipe, Ingredient
from .serializers import RecipeListSerializer, RecipeDetailSerializer, IngredientSerializer


class RecipeListView(ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeListSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title', 'description', 'category', 'cuisine', 'cooktime', 'serving']


class RecipeDetailView(RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeDetailSerializer


class IngredientsListView(ListAPIView):
    queryset = Ingredient.objects.values('product').distinct().order_by(Lower('product'))
    serializer_class = IngredientSerializer

class CategoryListView(APIView):
    def get(self, request, format=None):
        return Response([e.value for e in Recipe.Category])


class CuisineListView(APIView):
    def get(self, request, format=None):
        return Response([e.value for e in Recipe.Cuisine])