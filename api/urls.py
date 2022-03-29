from django.urls import path
from .views import JoinRoom, RoomView, CreateRoomView, GetRoom, ValidateUser

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join-room', JoinRoom.as_view()),
    path('validate-user', ValidateUser.as_view()),
]