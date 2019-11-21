FROM python:3.6.9-slim
WORKDIR /authdio/
RUN pip install --upgrade pip
RUN apt-get update && apt-get install -y portaudio19-dev python3-pyaudio git gcc musl-dev libpq-dev ffmpeg
COPY test_requirements.txt /authdio/
RUN pip install -r test_requirements.txt
COPY requirements.txt /authdio/
RUN pip install -r requirements.txt && pip install git+https://github.com/mauriciorepetto/dejavu.git@dejavu_python_3.6.6
COPY . .
CMD python app.py