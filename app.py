import os
import uuid

from flask import Flask
from flask import render_template
from flask import request
from flask import send_from_directory
from flask_cors import CORS

from app.dv.dv import DV

APP_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app')
DS = os.sep
TEMPLATE_PATH = os.path.join(APP_PATH, 'templates/')

app = Flask('authdio',
            template_folder=TEMPLATE_PATH,
            static_folder=APP_PATH + DS + 'static')

CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/listen', methods=['POST'])
def listen():
    f = request.files['audio']
    a = request.form['account']

    # Create folder if it doesn't exist
    folder = APP_PATH + DS + 'storage' + DS
    if not os.path.exists(folder):
        os.makedirs(folder)

    # Save wave in folder
    file_path = folder + str(uuid.uuid4()) + '.wav'
    f.save(file_path)

    # Attempt to match recording
    dejavu = DV()
    song = dejavu.listen(file_path)
    print(song)

    # NOTE: When matching device, check that IPs match ? Should be in same network right ?

    # Cleanup. Delete file
    # os.remove(file_path)

    return song


@app.route('/listen.js')
def get_script():
    return send_from_directory(APP_PATH + DS + 'dv', 'listen.min.js')


if __name__ == '__main__':
    app.run(port=8000, host='0.0.0.0')
