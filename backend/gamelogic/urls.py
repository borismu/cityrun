from django.urls import path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from . import api_views

app_name = 'gamelogic'


router = routers.SimpleRouter()
router.register(r'questions', api_views.QuestionsViewset)

urlpatterns = [
    path('token', obtain_auth_token),
    path('submitAnswer', api_views.TestView.as_view())
] + router.urls