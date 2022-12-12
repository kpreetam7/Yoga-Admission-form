from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    age = models.IntegerField(validators=[MinValueValidator(18), MaxValueValidator(65)])
    gender = models.CharField(max_length=10)
    slot = models.CharField(max_length=10)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.name