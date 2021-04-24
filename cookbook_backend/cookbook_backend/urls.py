from django.contrib import admin
from django.urls import path, include

from cookbook.models import Recipe, Ingredient, Instruction

admin.site.register(Recipe)
admin.site.register(Ingredient)
admin.site.register(Instruction)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('cookbook.urls'))
]
