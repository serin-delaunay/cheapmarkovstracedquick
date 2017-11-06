# input: text file(s), split method (characters, words (separator), words and separators (separators)), stop characters, n-gram length, probability precision
# output: tracery grammar approximating markov chain derived from input text
# Is there a reasonable way to use tracery's variable assignment to increase similarity to source text? probably not.

import sys
import argparse
import json

import MarkovTracery as MT

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Parse text and output a Markov chain implemented as a Tracery grammar.")
    parser.add_argument('-n', '--ngram-size', metavar='n', type=int, default=4, help="size of n-grams in the Markov chain")
    parser.add_argument('-i', '--source', metavar='i.txt', type=str, help="path to file containing source text", required=True),
    parser.add_argument('-o', '--output', metavar='o.json', type=str, default='markov_grammar.json', help="path to output file (will be overwritten without confirmation!)")
    tokenisation_desc = parser.add_argument_group("tokenisation options", "How the source text is divided into a sequence of tokens:")
    tokenisation = tokenisation_desc.add_mutually_exclusive_group()
    tokenisation.add_argument('-c', '--chars', action='store_const', dest='tokenisation', const=MT.Tokenisation.Chars, help="treat the text as a sequence of characters", default=True)
    tokenisation.add_argument('-w', '--words', action='store_const', dest='tokenisation', const=MT.Tokenisation.Words, help="treat the text as an alternating sequence of words and punctuation+whitespace")
    parser.add_argument('-d', '--line-delimiters', metavar='"\\n"', default='"\\n"', help="escaped string containing characters which will be used to split the input file into lines.")
    parser.add_argument('--include-delimiters', default=False, action='store_true', help="Include delimiter characters in separated lines")
    # TODO implement include-delimiters=false and make MA use the option.
    args = parser.parse_args()
    print(args)
    ma = MT.MarkovAnalyser(
        ngram_size=args.ngram_size,
        tokenisation=args.tokenisation,
        delimiters=args.line_delimiters) #bytes(args.line_delimiters, 'utf8').decode('unicode_escape'))
    #line = "hello there I am happy to meet you my name is Serin hows it going are you good I hope we are all doing good today is it not a lovely day how wonderful. by the way I'm a twitterbot, hope ya don't mind!!!"
    #line = "#\\#\\#\\#\\#\\$^&*%)!)*!()))*$%&)][][][][][][once upon a time there was a [][]][~~~\"~~~~¬¬¬¬````||\"||||////????.,.,.,.,and they were very<><><++++-==-=-=--___;;;;very::@@@@@''''||"
    #line = 'ababababababababa'
    with open(args.source,'r',encoding='utf8') as f:
          ma.parse_source(f.read())
    g = ma.output_grammar()
    with open('markov_tracery.json','w',encoding='utf8') as f:
        json.dump(g,f,indent='\t')