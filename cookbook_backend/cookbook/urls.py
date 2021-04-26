from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import RecipeListView, RecipeDetailView, IngredientsListView, CategoryListView, CuisineListView
from .models import Recipe

router = DefaultRouter()

urlpatterns = router.urls + [
    path('recipes/', RecipeListView.as_view()),
    path('recipes/<int:pk>/', RecipeDetailView.as_view()),
    path('ingredients/', IngredientsListView.as_view()),
    path('categories/', CategoryListView.as_view()),
    path('cuisine/', CuisineListView.as_view()),
]
