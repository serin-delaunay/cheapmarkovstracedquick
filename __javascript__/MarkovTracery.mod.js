	__nest__ (
		__all__,
		'MarkovTracery', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var re = {};
					var __name__ = 'MarkovTracery';
					var it =  __init__ (__world__.itertools);
					__nest__ (re, '', __init__ (__world__.re));
					var Tokenisation = __class__ ('Tokenisation', [object], {
						__module__: __name__,
						Chars: __class__ ('Chars', [object], {
							__module__: __name__,
						}),
						Words: __class__ ('Words', [object], {
							__module__: __name__,
						})
					});
					var START = '   START   \n   TOKEN   ';
					var END = '   END   \n   TOKEN   ';
					var connector = '_';
					var char_symbols = dict ([[START, '_S_'], [END, '_E_'], ['#', '_H_'], ['[', '_L_'], [']', '_R_'], ['\\', '_B_'], ['"', '_Q_'], ['.', '_F_'], ['_', '_U_'], ['\r', '_CR_'], ['\n', '_N_'], ['\t', '_T_']]);
					var char_renderings = dict ([[START, ''], [END, ''], ['#', '\\#'], ['[', '\\['], [']', '\\]'], ['\\', '\\\\'], ['"', '\\"'], ['\n', '\n'], ['\t', '\t']]);
					var char_symbol = function (char) {
						if (__in__ (char, char_symbols)) {
							return char_symbols [char];
						}
						else {
							return char;
						}
					};
					var token_symbol = function (token) {
						if (__in__ (token, char_symbols)) {
							return char_symbols [token];
						}
						else {
							return ''.join ((function () {
								var __accu0__ = [];
								for (var char of list (token)) {
									__accu0__.append (char_symbol (char));
								}
								return py_iter (__accu0__);
							}) ());
						}
					};
					var char_rendering = function (char) {
						if (__in__ (char, char_renderings)) {
							return char_renderings [char];
						}
						else {
							return char;
						}
					};
					var token_rendering = function (token) {
						if (__in__ (token, char_renderings)) {
							return char_renderings [token];
						}
						else {
							return ''.join ((function () {
								var __accu0__ = [];
								for (var char of list (token)) {
									__accu0__.append (char_rendering (char));
								}
								return py_iter (__accu0__);
							}) ());
						}
					};
					var start_symbol = function (ngram_size) {
						return connector.join (it.repeat (char_symbols [START], ngram_size - 1));
					};
					var Production = __class__ ('Production', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, prefix, key) {
							if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
								var key = null;
							};
							self._prefix = prefix;
							self._data = dict ({});
							if (key !== null) {
								self.increment (key);
							}
						});},
						get increment () {return __get__ (this, function (self, key) {
							if (__in__ (key, self._data)) {
								self._data [key]++;
							}
							else {
								self._data [key] = 1;
							}
						});},
						get next_token () {return __get__ (this, function (self, production) {
							if (production == END) {
								return token_rendering (production);
							}
							else {
								return token_rendering (production) + '#{}{}#'.format (self._prefix, token_symbol (production));
							}
						});},
						get render_option () {return __get__ (this, function (self, option, frequency) {
							var r = self.next_token (option);
							return (function () {
								var __accu0__ = [];
								for (var _ = 0; _ < frequency; _++) {
									__accu0__.append (r);
								}
								return __accu0__;
							}) ();
						});},
						get render () {return __get__ (this, function (self) {
							if (len (self._data) == 1) {
								return self.next_token (list (self._data.py_keys ()) [0]);
							}
							var L = list (it.chain (...(function () {
								var __accu0__ = [];
								for (var [k, v] of self._data.py_items ()) {
									__accu0__.append (it.repeat (self.next_token (k), v));
								}
								return py_iter (__accu0__);
							}) ()));
							if (len (L) == 1) {
								return L [0];
							}
							return L;
						});}
					});
					var MarkovAnalyser = __class__ ('MarkovAnalyser', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, ngram_size, tokenisation, delimiters, include_delimiters) {
							if (typeof ngram_size == 'undefined' || (ngram_size != null && ngram_size .hasOwnProperty ("__kwargtrans__"))) {;
								var ngram_size = 4;
							};
							if (typeof tokenisation == 'undefined' || (tokenisation != null && tokenisation .hasOwnProperty ("__kwargtrans__"))) {;
								var tokenisation = Tokenisation.Chars;
							};
							if (typeof delimiters == 'undefined' || (delimiters != null && delimiters .hasOwnProperty ("__kwargtrans__"))) {;
								var delimiters = '\n';
							};
							if (typeof include_delimiters == 'undefined' || (include_delimiters != null && include_delimiters .hasOwnProperty ("__kwargtrans__"))) {;
								var include_delimiters = false;
							};
							self.wipe_data ();
							self.ngram_size = ngram_size;
							self.tokenisation = tokenisation;
							self.delimiters = delimiters;
							self.include_delimiters = include_delimiters;
						});},
						get wipe_data () {return __get__ (this, function (self) {
							self._data = dict ({});
						});},
						get ngram_code () {return __get__ (this, function (self, ngram) {
							return connector.join ((function () {
								var __accu0__ = [];
								for (var c of ngram) {
									__accu0__.append (token_symbol (c));
								}
								return py_iter (__accu0__);
							}) ());
						});},
						get increment_transition () {return __get__ (this, function (self, ngram, postfix) {
							var index_code = self.ngram_code (ngram);
							var prefix_code = self.ngram_code (ngram.__getslice__ (1, null, 1)) + connector;
							if (__in__ (index_code, self._data)) {
								self._data [index_code].increment (postfix);
							}
							else {
								self._data [index_code] = Production (prefix_code, postfix);
							}
						});},
						get split_source () {return __get__ (this, function (self, string, delimiters) {
							if (self.include_delimiters) {
								var pattern = '([^{0}]*[{0}]+)'.format (delimiters);
							}
							else {
								var pattern = '[{0}]+'.format (delimiters);
							}
							return (function () {
								var __accu0__ = [];
								for (var line of re.py_split (pattern, string)) {
									if (line != '') {
										__accu0__.append (line);
									}
								}
								return __accu0__;
							}) ();
						});},
						get parse_source () {return __get__ (this, function (self, string) {
							for (var line of self.split_source (string, self.delimiters)) {
								self.parse_line (line);
							}
						});},
						get ngram_list () {return __get__ (this, function (self, line) {
							return (function () {
								var __accu0__ = [];
								for (var i = 0; i < (len (line) - self.ngram_size) + 1; i++) {
									__accu0__.append (line.__getslice__ (i, i + self.ngram_size, 1));
								}
								return __accu0__;
							}) ();
						});},
						get split_line () {return __get__ (this, function (self, line) {
							if (self.tokenisation == Tokenisation.Chars) {
								return list (line);
							}
							else if (self.tokenisation == Tokenisation.Words) {
								return (function () {
									var __accu0__ = [];
									for (var t of re.py_split ('(\\W+)', line)) {
										if (t != '') {
											__accu0__.append (t);
										}
									}
									return __accu0__;
								}) ();
							}
							else {
								var __except0__ = NotImplemented;
								__except0__.__cause__ = null;
								throw __except0__;
							}
						});},
						get parse_line () {return __get__ (this, function (self, line) {
							var line_aug = (function () {
								var __accu0__ = [];
								for (var _ = 0; _ < self.ngram_size - 1; _++) {
									__accu0__.append (START);
								}
								return __accu0__;
							}) ();
							line_aug.extend (self.split_line (line));
							line_aug.append (END);
							for (var ngram of self.ngram_list (line_aug)) {
								self.increment_transition (tuple (ngram.__getslice__ (0, -(1), 1)), ngram.__getslice__ (-(1), null, 1) [0]);
							}
						});},
						get output_grammar () {return __get__ (this, function (self) {
							var g = (function () {
								var __accu0__ = [];
								for (var [k, v] of self._data.py_items ()) {
									__accu0__.append (list ([k, v.render ()]));
								}
								return dict (__accu0__);
							}) ();
							g ['origin'] = '#{}#'.format (start_symbol (self.ngram_size));
							return g;
						});}
					});
					__pragma__ ('<use>' +
						'itertools' +
						're' +
					'</use>')
					__pragma__ ('<all>')
						__all__.END = END;
						__all__.MarkovAnalyser = MarkovAnalyser;
						__all__.Production = Production;
						__all__.START = START;
						__all__.Tokenisation = Tokenisation;
						__all__.__name__ = __name__;
						__all__.char_rendering = char_rendering;
						__all__.char_renderings = char_renderings;
						__all__.char_symbol = char_symbol;
						__all__.char_symbols = char_symbols;
						__all__.connector = connector;
						__all__.start_symbol = start_symbol;
						__all__.token_rendering = token_rendering;
						__all__.token_symbol = token_symbol;
					__pragma__ ('</all>')
				}
			}
		}
	);
