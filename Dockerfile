FROM python:3
ENV PYTHONUNBUFFERED=1
#ENV DJANGO_SUPERUSER_USERNAME="root"
#ENV DJANGO_SUPERUSER_PASSWORD="1234"
#ENV DJANGO_SUPERUSER_EMAIL="root@example.com"
WORKDIR /code
COPY cookbook_backend/requirements.txt /code/
RUN pip install -r requirements.txt
COPY cookbook_backend /code/
#RUN python3 manage.py makemigrations cookbook
#RUN python3 manage.py migrate
#RUN python3 manage.py createsuperuser --noinput
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
