from rest_framework import viewsets, views, response, permissions

from .models import GameSession, Question, Hint, Answer, HintUsed
from .serializers import QuestionSerializer


class QuestionsViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class TestView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        # usernames = [user.username for user in User.objects.all()]
        usernames = {"isCorrect":False}
        return response.Response(usernames)
