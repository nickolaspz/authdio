# -*- coding: utf-8 -*-
from dejavu import Dejavu
from dejavu.recognize import MicrophoneRecognizer
from dejavu.recognize import FileRecognizer

class DV:
    def __init__(self):
        pass

    def init(self):
        config = {
            "database": {
                "host": "127.0.0.1",
                "user": "root",
                "passwd": "root",
                "db": "dejavu"
            }
        }

        return Dejavu(config)

    def listen(self, file_path):
        djv = self.init()
        # song = djv.recognize(MicrophoneRecognizer, seconds=10)
        song = djv.recognize(FileRecognizer, file_path)
        return song



