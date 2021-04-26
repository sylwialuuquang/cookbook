from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from cookbook.models import Recipe, Ingredient, Instruction, RecipeIngredient

admin.site.register(Recipe)
admin.site.register(Ingredient)
admin.site.register(Instruction)
admin.site.register(RecipeIngredient)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include('cookbook.urls'))
]
