from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import RecipeListView, RecipeDetailView, IngredientsListView

router = DefaultRouter()

urlpatterns = router.urls + [
    path('recipes/', RecipeListView.as_view()),
    path('recipes/<int:pk>/', RecipeDetailView.as_view()),
    path('ingredients/', IngredientsListView.as_view())
]
