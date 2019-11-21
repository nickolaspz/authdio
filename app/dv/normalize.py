import numpy as np

from typing import Dict, List


class Normalize:
    def convert_list_to_string(self, list: Dict):
        converted = {}
        for key in list:
            if isinstance(list[key], List):
                converted_list = []
                for dict in list[key]:
                    converted_dict = {}
                    if isinstance(dict, Dict):
                        for element in dict:
                            converted_dict[element] = self.convert_to_string(dict[element])

                        converted_list.append(converted_dict)

                converted[key] = converted_list
            else:
                converted[key] = self.convert_to_string(list[key])

        return converted

    def convert_to_string(self, value):
        if isinstance(value, bytes):
            return value.decode('utf-8')
        elif isinstance(value, np.integer):
            return int(value)
        elif isinstance(value, np.floating):
            return float(value)

        return value
