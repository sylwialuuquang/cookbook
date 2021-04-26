from django.db.models import Model, CharField, TextField, IntegerField, TextChoices, ForeignKey, CASCADE, ManyToManyField


class Ingredient(Model):
    product = CharField(max_length=24)

    def __str__(self):
        return self.product


class Recipe(Model):

    class Category(TextChoices):
        BREAKFAST = 'Breakfast'
        LUNCH = 'Lunch'
        DINNER = 'Dinner'
        DESSERT = 'Dessert'
        SUPPER = 'Supper'
        OTHER = 'Other'

    class Cuisine(TextChoices):
        AMERICAN = 'American'
        POLISH = 'Polish'
        ITALIAN = 'Italian'
        JAPANESE = 'Japanese'
        CHINESE = 'Chinese'
        OTHER = 'Other'

    title = CharField(max_length=128)
    description = CharField(max_length=256)
    ingredients = ManyToManyField(
        Ingredient,
        through='RecipeIngredient',
        through_fields=('recipe', 'ingredient'),
        related_name='recipe'
    )
    category = CharField(
        max_length=9,
        choices=Category.choices,
        default=Category.OTHER
    )
    cuisine = CharField(
        max_length=8,
        choices=Cuisine.choices,
        default=Cuisine.OTHER
    )
    cooktime = IntegerField()
    serving = CharField(max_length=24)

    def __str__(self):
        return self.title


class RecipeIngredient(Model):
    UNIT_CHOICES = (
        ('kg', 'kg'),
        ('g', 'g'),
        ('l', 'l'),
        ('ml', 'ml'),
        ('', '')
    )

    recipe = ForeignKey(Recipe, on_delete=CASCADE)
    ingredient = ForeignKey(Ingredient, on_delete=CASCADE)
    quantity = IntegerField()
    unit = CharField(
        max_length=2,
        choices=UNIT_CHOICES,
        default='',
        blank=True
    )

    def __str__(self):
        return self.recipe.title + ' - ' + self.ingredient.product
    

class Instruction(Model):
    text = TextField()
    recipe = ForeignKey(Recipe, on_delete=CASCADE, related_name='instructions')

    def __str__(self):
        return self.text
