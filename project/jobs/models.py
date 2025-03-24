from django.db import models

# Create your models here.

class Jobs(models.Model):
    school = models.TextField()
    grade = models.PositiveSmallIntegerField()
    teacher = models.TextField()
    subject = models.TextField()
    accepted = models.BooleanField(default=False)

    def __str__(self):
        return self.id
    
    class Meta:
        ordering = ['school', 'grade', 'teacher', 'subject', 'accepted', 'accepted']

