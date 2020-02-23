import os


class TestFileTemplateGenerator:
    def __init__(self):
        self.string_filter_list = ['for', 'if', 'else', 'class', 'constructor', 'try', 'catch']
        self.output_folder = 'output'

    def _write_import(self, model_name):
        with open(self.output_path, 'a') as f:
            line = "import {{}} from '@/models/folder_name/{}.js'".format(model_name, model_name)
            f.write(line)
            f.write('\n')
            f.write('\n')

    def _load_files(self, folder_path):
        files = os.listdir(folder_path)
        for file_path in files:
            print(file_path)
            path = '{}/{}'.format(folder_path, file_path)
            output_name = file_path.replace('model', 'model_test')
            model_name = file_path.rstrip('.js')
            self.output_path = '{}/{}'.format(self.output_folder, output_name)

            self._write_import(model_name=model_name)
            self._write_file(self.output_path, model_name)
            with open(path, 'r') as f:
                data = f.readlines()
                self._parse_property(data=data)
            self._write_file(self.output_path, '})')
    def _check_contains_string(self, line):
        for s in self.string_filter_list:
            if s in line:
                return False
        return True

    def _write_file(self, file_path, property):
        if not os.path.exists(file_path):
            with open(file_path, 'w') as f:
                # line = "describe('' test', function(){".format('')
                line = "describe('{} test', function()){{".format(property)
                f.write(line + '\n')
        else:
            with open(file_path, 'a') as f:
                if property == '})':
                    f.write(property)
                else:
                    line1 = "   describe('{}', function(){{".format(property)
                    f.write(line1 + '\n')
                    line2 = "       it('', function(){"
                    line3 = "       })"
                    line4 = "   })"
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



def main():
    folder = 'test_folder'
    file_generator = TestFileTemplateGenerator()
    file_generator._load_files(folder_path=folder)



if __name__ == "__main__":
    main()