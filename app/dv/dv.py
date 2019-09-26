# -*- coding: utf-8 -*-
from dejavu import Dejavu
from dejavu.recognize import MicrophoneRecognizer
from dejavu.recognize import FileRecognizer

class DejavuWrapper
    def __init__(self):
        pass

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
        djv.fingerprint_directory("sounds/fingerprint", [".mp3"], 3)

    @staticmethod
    def listen(file):
        djv = init()
        # song = djv.recognize(MicrophoneRecognizer, seconds=10)
        song = djv.recognize(FileRecognizer, file)
        print song


# if __name__ == '__main__':
#     # fingerprint()
#     listen()
