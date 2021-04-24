from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Recipe, Ingredient
from .serializers import RecipeListSerializer, RecipeDetailSerializer, IngredientSerializer


class RecipeListView(ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeListSerializer


class RecipeDetailView(RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeDetailSerializer


class IngredientsListView(ListAPIView):
    queryset = Ingredient.objects.values('product').distinct()
    serializer_class = IngredientSerializer


