from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import IngredientsListView, CategoryListView, CuisineListView, RecipeViewSet

router = DefaultRouter()
router.register('recipes', RecipeViewSet, basename='recipe')

urlpatterns = [
    path('ingredients/', IngredientsListView.as_view()),
    path('categories/', CategoryListView.as_view()),
    path('cuisine/', CuisineListView.as_view()),
    path('', include(router.urls))
]
