# -*- coding: utf-8 -*-
import os
from dejavu import Dejavu
from dejavu.logic.recognizer.file_recognizer import FileRecognizer


class DV:
    def __init__(self):
        self.config = Dejavu({
            "database": {
                "host": "db",
                "user": os.environ["POSTGRES_USER"],
                "password": os.environ["POSTGRES_PASSWORD"],
                "database": os.environ["POSTGRES_DB"]
            },
            "database_type": "postgres"
        })

    def listen(self, file_path):
        djv = self.config
        # song = djv.recognize(MicrophoneRecognizer, seconds=10)
        song = djv.recognize(FileRecognizer, file_path)
        return song



