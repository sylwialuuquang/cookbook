FROM python:3
ENV PYTHONUNBUFFERED=1

ENV DJANGO_SUPERUSER_PASSWORD "1234"
ENV DJANGO_SUPERUSER_USERNAME "admin"
ENV DJANGO_SUPERUSER_EMAIL "admin@admin.com"
RUN mkdir /backend
WORKDIR /backend
COPY cookbook_backend/requirements.txt /backend/
EXPOSE 8000
RUN pip install -r requirements.txt
COPY cookbook_backend /backend/
RUN python manage.py makemigrations cookbook
RUN python manage.py migrate
RUN python manage.py loaddata fixtures.json
RUN python manage.py createsuperuser --noinput
CMD ["gunicorn", "cookbook_backend.wsgi", "--bind", "0.0.0.0:8000"]
