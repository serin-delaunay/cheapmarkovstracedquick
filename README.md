# Cheap Markovs, Traced Quick!

Cheap Markovs, Traced Quick! (CMTQ) is a Python module which analyses text to create a [Markov text generator](https://en.wikipedia.org/wiki/Markov_chain#Markov_text_generators),
and outputs the result as a [Tracery](http://tracery.io) grammar compatible with the [Cheap Bots, Done Quick!](https://cheapbotsdonequick.com) (CBDQ) Twitterbot hosting service.

CMTQ is written using [Transcrypt](https://transcrypt.org/)-compatible Python,
so it can be run as a native Python script (cmtq-console.py),
or compiled to a JavaScript library and run in a webpage.

You can use Cheap Markovs, Traced Quick! in your browser, with no installation required, at
[https://serin-delaunay.github.io/cheapmarkovstracedquick](https://serin-delaunay.github.io/cheapmarkovstracedquick).

# Tutorial

Coming soon!

# Why does this exist?

Markov text generators are a standard, almost stereotypical, way of generating humorous procedural text,
and there are already a lot of tools available to make them.
Some of these tools even run a Twitterbot for you.
However, they all (as far as I know) require you to do at least one of these things:
* Install a programming environment like Node.js, Python, or Ruby locally
* Run a server
* Use command-line tools
* Program in Javascript, Python, or Ruby

Requirements like these provide obstacles to the craft of botmaking for non-programmers,
so in the spirit of tools like Tracery and CBDQ,
CMTQ attempts to minimise the technical knowledge and resources needed to make a Markov Twitterbot.
