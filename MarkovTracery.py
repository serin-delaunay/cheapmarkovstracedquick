import itertools as it
import re

# enum not supported by transcrypt
class Tokenisation:
    class Chars: pass
    class Words: pass

# Transcrypt compatibility:
# Must not compare equal to any other token or each other, both as a value and as a dict key.
# Whitespace and length ensure that these cannot occur as tokens in source text.
START = "   START   \n   TOKEN   "
END = "   END   \n   TOKEN   "

assert(START != END)
print(str(START == END))

connector = '_'
# TODO provide option to save space by excluding connector (), at risk of ambiguity and awfulness?
# Note: CBDQ has a special interpretation for {} and it doesn't seem to be possible to escape them.
char_symbols = {
    START: '_S_',
    END: '_E_',
    '#': '_H_',
    '[': '_L_',
    ']': '_R_',
    '\\': '_B_',
    '"':'_Q_',
    '.': '_F_',
    '_': '_U_',
    '\r': '_CR_', # HTML5 file input doesn't autoconvert newlines to \n
    '\n': '_N_',
    "\t": '_T_'
}
char_renderings = {
    START:'',
    END:'',
    '#':'\\#',
    '[':'\\[',
    ']':'\\]',
    '\\':'\\\\',
    '"':'\\"',
    '\n':'\n',
    '\t':'\t'
}

def char_symbol(char):
    # Can't use try clause here because KeyError is not raised in Transcrypt
    if char in char_symbols:
        return char_symbols[char]
    else:
        return char

def token_symbol(token):
    # Can't use try clause here because KeyError is not raised in Transcrypt
    if token in char_symbols:
        return char_symbols[token]
    else:
        # Transcrypt strings are not iterable
        return ''.join(char_symbol(char) for char in list(token))

def char_rendering(char):
    # Can't use try clause here because KeyError is not raised in Transcrypt
    if char in char_renderings:
        return char_renderings[char]
    else:
        return char

def token_rendering(token):
    # Can't use try clause here because KeyError is not raised in Transcrypt
    if token in char_renderings:
        return char_renderings[token]
    else:
        # Transcrypt strings are not iterable
        return ''.join(char_rendering(char) for char in list(token))

def start_symbol(ngram_size):
    return connector.join(it.repeat(char_symbols[START],(ngram_size-1)))

class Production(object):
    # Don't use Counter so that collections is not a dependency (transcrypt compatibility)
    def __init__(self, prefix, key=None):
        self._prefix = prefix
        self._data = {}
        if key is not None:
            self.increment(key)
    def increment(self, key):
        # Can't use try clause here because KeyError is not raised in Transcrypt
        if key in self._data:
            self._data[key] += 1
        else:
            self._data[key] = 1
    def next_token(self, production):
        if production == END:
            return token_rendering(production)
        else:
            return token_rendering(production)+"#{}{}#".format(self._prefix, token_symbol(production))
    def render_option(self, option, frequency):
        r = self.next_token(option)
        return [r for _ in range(frequency)]
    def render(self):
        if len(self._data) == 1:
            return self.next_token(list(self._data.keys())[0])
        L = list(it.chain(*(
            it.repeat(self.next_token(k),v)
            for (k,v) in self._data.items()
            )))
        if len(L) == 1:
            return L[0]
        return L

class MarkovAnalyser(object):
    def __init__(self, ngram_size=4, tokenisation=Tokenisation.Chars, delimiters='\n', include_delimiters=False):
        self.wipe_data()
        self.ngram_size = ngram_size
        self.tokenisation = tokenisation
        self.delimiters = delimiters
        self.include_delimiters=include_delimiters
    def wipe_data(self):
        self._data = {} # Don't use defaultdict so that collections is not a dependency
    def ngram_code(self, ngram):
        return connector.join((token_symbol(c) for c in ngram))
        
    def increment_transition(self, ngram, postfix):
        # N-grams cannot be used as dict keys because in Transcrypt scripts they cannot be retrieved as tuples
        index_code = self.ngram_code(ngram)
        prefix_code = self.ngram_code(ngram[1:])+connector
        if index_code in self._data:
            self._data[index_code].increment(postfix)
        else:
            self._data[index_code] = Production(prefix_code, postfix)
    
    def split_source(self, string, delimiters):
        #escaped_delimiters = re.escape(delimiters)
        #escaped_delimiters = ''.join('\\Q{}\\E'.format(d) for d in delimiters)
        #escaped_delimiters = '|'.join('\\Q{}\\E'.format(d) for d in delimiters)
        if self.include_delimiters:
            pattern = '([^{0}]*[{0}]+)'.format(delimiters)
        else:
            pattern = '[{0}]+'.format(delimiters)
        # TODO this definitely does not account for all possitibilities ('-' in particular)
        # print(repr(delimiters), repr(pattern))
        return [line for line in
                re.split(pattern, string)
                if line != '']
    
    def parse_source(self, string):
        for line in self.split_source(string, self.delimiters):
            self.parse_line(line)
  
    def ngram_list(self, line):
        return [line[i:i+self.ngram_size] for i in range(len(line)-self.ngram_size+1)]
        
    def split_line(self, line):
        if self.tokenisation == Tokenisation.Chars:
            return list(line)
        elif self.tokenisation == Tokenisation.Words:
            return [t for t in re.split('(\W+)', line) if t != '']
        else:
            raise NotImplemented
  
    def parse_line(self, line):
        # Can't use list.__add__ for Transcrypt compatibility, can't use __pragma__ for CPython compatibility
        line_aug = [START for _ in range(self.ngram_size-1)]
        line_aug.extend(self.split_line(line))
        line_aug.append(END)
        for ngram in self.ngram_list(line_aug):
            # list[-1] not supported in Transcrypt, list[-1:][0] supported
            self.increment_transition(tuple(ngram[:-1]),ngram[-1:][0])
        
    def output_grammar(self):
        g = {k:v.render() for (k,v) in self._data.items()}
        g['origin'] = '#{}#'.format(start_symbol(self.ngram_size))
        return g
