# -*- coding: utf-8 -*-
from dejavu import Dejavu
from pydub import AudioSegment
import os

APP_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DS = os.sep


def init():
    config = {
        "database": {
            "host": "127.0.0.1",
            "user": "root",
            "passwd": "root",
            "db": "dejavu"
        }
    }

    return Dejavu(config)


def fingerprint():
    djv = init()
    djv.fingerprint_directory(APP_PATH + DS + "sounds" + DS + "fingerprint" + DS + "wav", [".wav"], 3)


def convert_mp3_to_wav():
    folder = APP_PATH + DS + "sounds" + DS + "fingerprint"
    mp3_folder = folder + DS + "mp3"
    wav_folder = folder + DS + "wav"
    for filename in os.listdir(mp3_folder):
        if filename.endswith(".mp3"):
            src = os.path.join(mp3_folder, filename)

            filename_no_ext = filename[0:filename.index('.')]

            # convert wav to mp3
            sound = AudioSegment.from_mp3(src)
            sound.export(wav_folder + DS + filename_no_ext + ".wav", format="wav")
            continue
        else:
            continue


if __name__ == '__main__':
    # convert_mp3_to_wav()
    fingerprint()
