from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from django.db.models.functions import Lower

from .models import Recipe, Ingredient
from .serializers import RecipeListSerializer, RecipeDetailSerializer, RecipeCreateSerializer


class RecipeViewSet(ModelViewSet):
    queryset = Recipe.objects.all()
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title', 'description', 'category', 'cuisine', 'cooktime', 'serving']
    serializer_class = RecipeListSerializer

    serializer_action_classes = {
        'retrieve': RecipeDetailSerializer,
        'create': RecipeCreateSerializer
    }
    
    def get_serializer_class(self):
        try:
            return self.serializer_action_classes[self.action]
        except (KeyError, AttributeError):
            return super().get_serializer_class()


class IngredientsListView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        return Response([e.product for e in Ingredient.objects.order_by(Lower('product'))])

class CategoryListView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        return Response([e.value for e in Recipe.Category])


class CuisineListView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        return Response([e.value for e in Recipe.Cuisine])