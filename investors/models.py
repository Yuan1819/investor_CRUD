from django.db import models

# Create your models here.
class Investor(models.Model):
    email = models.CharField(max_length=200, blank=True)
    name = models.CharField(max_length=200, blank=True)
    allocation = models.IntegerField(blank=True, null=True)
    equity = models.FloatField(blank=True, null=True)

    def __str__(self):
        return self.email
