from rest_framework.generics import ListAPIView, RetrieveAPIView
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
    # permission_classes = [IsAuthenticated]


class RecipeDetailView(RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeDetailSerializer
    permission_classes = [IsAuthenticated]


class IngredientsListView(ListAPIView):
    queryset = Ingredient.objects.values('product').distinct().order_by(Lower('product'))
    serializer_class = IngredientSerializer
    permission_classes = [IsAuthenticated]


