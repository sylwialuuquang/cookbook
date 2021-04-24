from rest_framework.serializers import ModelSerializer, StringRelatedField

from .models import Recipe, Ingredient, Instruction


class IngredientSerializer(ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['product', ]


class InstructionSerializer(ModelSerializer):
    class Meta:
        model = Instruction
        fields = ['text', ]


class RecipeListSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'category', 'cuisine']


class RecipeDetailSerializer(ModelSerializer):
    ingredients = StringRelatedField(many=True)
    instructions = StringRelatedField(many=True)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'category', 'cuisine', 'ingredients', 'instructions']





