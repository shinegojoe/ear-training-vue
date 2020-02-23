import os


class TestFileTemplateGenerator:
    def __init__(self, input_folder, output_folder):
        self.input_folder = input_folder
        self.output_folder = output_folder
        self.string_filter_list = ['for', 'if', 'else', 'class', 'constructor', 'try', 'catch']

    def _write_import(self, model_name):
        with open(self.output_path, 'a') as f:
            line = "import {{}} from '@/models/folder_name/{}.js'".format(model_name, model_name)
            line2 = "const assert = require('chai').assert"
            f.write(line + '\n')
            f.write(line2 + '\n')
            f.write('\n')
            f.write('\n')

    def _load_files(self):
        files = os.listdir(self.input_folder)
        for file_path in files:
            print(file_path)
            path = '{}/{}'.format(self.input_folder, file_path)
            output_name = file_path.replace('model', 'model_test')
            model_name = file_path.rstrip('.js')
            self.output_path = '{}/{}'.format(self.output_folder, output_name)

            self._write_import(model_name=model_name)
            # self._write_file(self.output_path, model_name)
            self._write_first_describe(model_name)
            with open(path, 'r') as f:
                data = f.readlines()
                self._parse_property(data=data)
            self._write_file(self.output_path, '})')

    def _check_contains_string(self, line):
        for s in self.string_filter_list:
            if s in line:
                return False
        return True

    def _write_first_describe(self, name):
        with open(self.output_path, 'a') as f:
            # line = "describe('' test', function(){".format('')
            line = "describe('{} test', function(){{".format(name)
            f.write(line + '\n')

    def _write_file(self, file_path, property):
        with open(file_path, 'a') as f:
            if property == '})':
                f.write(property)
            else:
                line1 = "    describe('{}', function(){{".format(property)
                f.write(line1 + '\n')
                line2 = "        it('', function(){"
                line3 = "        })"
                line4 = "    })"
                f.write(line2 + '\n')
                f.write(line3 + '\n')
                f.write(line4 + '\n')

    def _parse_property(self, data):
        for line in data:
            line = line.rstrip('\n')
            # print(line)
            if line.endswith('{'):
                if self._check_contains_string(line=line):
                    line = line.rstrip('{')
                    line = line.strip()
                    print(line)
                    self._write_file(self.output_path, line)

    def run(self):
        self._load_files()


def main():
    input_folder = '/home/taka/projects/webpack-vue/src/models/chord_classification_models'
    output_folder = '/home/taka/projects/webpack-vue/test/chord_classification_models_test'
    file_generator = TestFileTemplateGenerator(input_folder=input_folder, output_folder=output_folder)
    file_generator.run()


if __name__ == "__main__":
    main()