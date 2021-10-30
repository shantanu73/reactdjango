FROM python:3.8.0

ENV PYTHONUNBUFFERED=1

RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

COPY . /demoproject
WORKDIR /demoproject

RUN pip3 install --no-cache -r requirements.txt

# Standard port inside docker container to run flask app
EXPOSE 8000

CMD python3 manage.py makemigrations
CMD python3 manage.py migrate
CMD python3 manage.py runserver
