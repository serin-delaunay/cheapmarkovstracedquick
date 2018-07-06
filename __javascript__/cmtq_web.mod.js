	(function () {
		var __name__ = '__main__';
		var MT =  __init__ (__world__.MarkovTracery);
		var cmtq = function () {
			var ngram_size = int (document.getElementById ('ngram_length_input').value);
			var tokenisation_str = document.querySelector ('input[name=tokenisation]:checked').value;
			if (!(tokenisation_str)) {
				alert ('Please select tokenisation type');
				return ;
			}
			var tokenisation = dict ({'chars': MT.Tokenisation.Chars, 'words': MT.Tokenisation.Words}) [tokenisation_str];
			var line_delimiters = document.getElementById ('line_delimiters_input').value;
			var include_delimiters = bool (document.getElementById ('include_delimiters_input').checked);
			var source_text = document.getElementById ('source_text_input').value;
			if (source_text == '') {
				alert ('Please provide some input text');
				return ;
			}
			generate_grammar (source_text, ngram_size, tokenisation, line_delimiters, include_delimiters);
		};
		var generate_grammar = function (text, ngram_size, tokenisation, line_delimiters, include_delimiters) {
			var ma = MT.MarkovAnalyser (ngram_size, tokenisation, line_delimiters, include_delimiters);
			ma.parse_source (text);
			document.getElementById ('tracery_grammar').value = JSON.stringify (ma.output_grammar ());
		};
		var load_source_files = function () {
			var source_files = document.getElementById ('source_files_input').files;
			var source_text_input = document.getElementById ('source_text_input');
			var append_text = function (text) {
				source_text_input.value += text;
			};
			for (var source_file of source_files) {
				var source_file_reader = new FileReader ();
				source_file_reader.onload = (function __lambda__ (event) {
					return append_text (event.target.result);
				});
				source_file_reader.readAsText (source_file);
			}
		};
		__pragma__ ('<use>' +
			'MarkovTracery' +
		'</use>')
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.cmtq = cmtq;
			__all__.generate_grammar = generate_grammar;
			__all__.load_source_files = load_source_files;
		__pragma__ ('</all>')
	}) ();
