from flask import Flask
from app.dv import DV
import os

APP_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app')
DS = os.sep
TEMPLATE_PATH = os.path.join(APP_PATH, 'templates/')

app = Flask('authdio', template_folder=TEMPLATE_PATH, static_folder=APP_PATH + DS + 'static')