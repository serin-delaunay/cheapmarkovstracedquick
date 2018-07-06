import MarkovTracery as MT

def cmtq():
    ngram_size = int(document.getElementById('ngram_length_input').value)
    tokenisation_str = document.querySelector('input[name=tokenisation]:checked').value
    if not tokenisation_str:
        alert("Please select tokenisation type") # TODO put this in an error element
        return
    tokenisation = {'chars':MT.Tokenisation.Chars, 'words':MT.Tokenisation.Words}[tokenisation_str]
    line_delimiters = document.getElementById('line_delimiters_input').value
    include_delimiters = bool(document.getElementById('include_delimiters_input').checked)
    source_text = document.getElementById('source_text_input').value
    if source_text == "":
        alert("Please provide some input text") # TODO put this in an error element
        return
    generate_grammar(source_text, ngram_size, tokenisation, line_delimiters, include_delimiters)

def generate_grammar(text, ngram_size, tokenisation, line_delimiters, include_delimiters):
    ma = MT.MarkovAnalyser(ngram_size, tokenisation, line_delimiters, include_delimiters)
    ma.parse_source(text)
    document.getElementById('tracery_grammar').value = JSON.stringify(ma.output_grammar())

def load_source_files():
    source_files = document.getElementById('source_files_input').files
    source_text_input = document.getElementById('source_text_input')
    def append_text(text):
        source_text_input.value += text
    for source_file in source_files:
        source_file_reader = __new__(FileReader())
        source_file_reader.onload = lambda event: append_text(event.target.result)
        source_file_reader.readAsText(source_file)
        # TODO make it clear when everything is loaded (this is async)
