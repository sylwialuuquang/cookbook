FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY cookbook_backend/requirements.txt /code/
RUN pip install -r requirements.txt
COPY cookbook_backend /code/
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
