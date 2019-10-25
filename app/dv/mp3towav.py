import os
# from pydub import AudioSegment

APP_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DS = os.sep


def ok():
    print(APP_PATH)


# for filename in os.listdir(APP_PATH):
#     if filename.endswith(".asm") or filename.endswith(".py"):
#         print(os.path.join(APP_PATH, filename))
#         continue
#     else:
#         continue

# # files
# src = "transcript.mp3"
# dst = "test.wav"
#
# # convert wav to mp3
# sound = AudioSegment.from_mp3(src)
# sound.export(dst, format="wav")

if __name__ == '__main__':
    print(APP_PATH)
    ok()
