from django.contrib import admin
from django.urls import path, include
from api.views import createUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import MyTokenObtainPairView
from docs.views import DocumentDownloadView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/user/register/", createUserView.as_view(), name="create"),
    path("api/token/", MyTokenObtainPairView.as_view(), name="login"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path('class/', include('classes.urls'), name="classes"),
    path('docs/', include('docs.urls'), name="docs"),
    path('documents/<str:filename>/', DocumentDownloadView.as_view(), name='document-download'),
    path('stats/', include('stats.urls')),
    path('tests/', include('tests.urls')),

]
