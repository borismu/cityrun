from django.contrib import admin

from .models import GameSession, Question, Hint, Answer, HintUsed

admin.site.register(GameSession)
admin.site.register(Question)
admin.site.register(Hint)
admin.site.register(Answer)
admin.site.register(HintUsed)