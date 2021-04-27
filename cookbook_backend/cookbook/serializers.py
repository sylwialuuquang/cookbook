from rest_framework.serializers import RelatedField, ModelSerializer, StringRelatedField, Serializer

from .models import Recipe, Ingredient, Instruction


class InstructionSerializer(ModelSerializer):
    class Meta:
        model = Instruction
        fields = ['text', ]


class RecipeListSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'category', 'cuisine']


class IngredientListingField(RelatedField):
    def to_representation(self, value):
        return str(value.quantity) + value.unit + ' ' + value.ingredient.product


class RecipeDetailSerializer(ModelSerializer):
    ingredients = IngredientListingField(many=True, read_only=True, source='recipeingredient_set')
    instructions = StringRelatedField(many=True)

    class Meta:
        model = Recipe
        fields = '__all__'

