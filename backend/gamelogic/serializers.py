from rest_framework import serializers

from .models import GameSession, Question, Hint, Answer, HintUsed


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        exclude = ('correct_answer',)


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('__all__')


# class GameSessionSerializer(serializers.Serializer):
#     score = serializers.SerializerMethodField()
#     score = serializers.SerializerMethodField()
