from django.db.models import Model, CharField, TextField, IntegerField, TextChoices, ForeignKey, CASCADE


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


class Ingredient(Model):

    class Unit(TextChoices):
        KG = 'kg'
        G = 'g'
        L = 'l'
        ML = 'ml'

    product = CharField(max_length=24)
    quantity = IntegerField()
    unit = CharField(
        max_length=2,
        choices=Unit.choices,
        default=Unit.KG
    )
    recipe = ForeignKey(Recipe, on_delete=CASCADE, related_name='ingredients')

    def __str__(self):
        return str(self.quantity) + self.unit + ' ' + self.product


class Instruction(Model):
    text = TextField()
    recipe = ForeignKey(Recipe, on_delete=CASCADE, related_name='instructions')

    def __str__(self):
        return self.text
