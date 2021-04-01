from django.db import models
from django.contrib.auth import get_user_model


# class Game(models.Model):
#     """
#     Holds all questions
#     """
#     name = models.CharField(max_length=100)


# class GameInstance(models.Model):
#     """
#     Particular game instance
#     """
#     start = models.DateTimeField()
#     end = models.DateTimeField()


class GameSession(models.Model):
    """
    Team - Game Instance joint object
    """
    # name = models.CharField(max_length=100)

    start = models.DateTimeField()
    end = models.DateTimeField()

    team = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    # game_instance = models.ForeignKey(GameInstance,on_delete=models.CASCADE)


class Question(models.Model):
    latitude = models.CharField(max_length=20)
    longitude = models.CharField(max_length=20)
    question_text = models.TextField()
    # question = models.ForeignKey(Game, on_delete=models.CASCADE)
    # question = models.ForeignKey(GameSession, on_delete=models.CASCADE)
    correct_answer = models.CharField(max_length=100)


class Hint(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    hint_text = models.TextField()


class HintUsed(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    hint = models.ForeignKey(Hint, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class Answer(models.Model):
    isCorrect = models.BooleanField()
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
