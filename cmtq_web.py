import MarkovTracery as MT

# class CMTQ:
    # def __init__(self):
        # self._text = None
        # self._output = None
        # self.initialise()
    # def initialise(self):
        # ngram_size = 5 # get from html
        # line_delimiters = '\n' #get from html
        # tokenisation = MarkovTracery.Tokenisation.Chars #get from html
        # self._ma = MarkovTracery.MarkovAnalyser(
            # ngram_size=ngram_size,
            # tokenisation=tokenisation,
            # delimiters=line_delimiters)
    # def update_text(self, text):
        # self._text = text
        # self.update_output()
    # def update_output(self):
        # self._ma.wipe_data()
        # self._ma.parse_source(self._text)
        # self._output = JSON.stringify(self._ma.output_grammar())

def cmtq():
    ngram_size = int(document.getElementById('ngram_length_input').value)
    tokenisation_str = document.querySelector('input[name=tokenisation]:checked').value;
    if not tokenisation_str:
        alert("Please select tokenisation type") # TODO put this in an error element
        return
    tokenisation = {'chars':MT.Tokenisation.Chars, 'words':MT.Tokenisation.Words}[tokenisation_str]
    line_delimiters = document.getElementById('line_delimiters_input').value
    source_files = document.getElementById('source_file_input').files
    # TODO allow pasting source text in a textarea
    if len(source_files) == 0:
        alert("Please select a source file") # TODO put this in an error element
        return
    source_file = source_files[0]
    source_file_reader = __new__(FileReader())
    source_file_reader.onload = lambda event: generate_grammar(
        event.target.result, ngram_size, tokenisation, line_delimiters)
    source_file_reader.readAsText(source_file)
def generate_grammar(text, ngram_size, tokenisation, line_delimiters):
    ma = MT.MarkovAnalyser(ngram_size, tokenisation, line_delimiters)
    ma.parse_source(text)
    document.getElementById('tracery_grammar').value = JSON.stringify(ma.output_grammar())
    