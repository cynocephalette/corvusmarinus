import os
from flask import Flask, request, make_response, render_template, g

from books import books

app = Flask(__name__)

@app.route('/')
def corvus():
    return make_response(open('index.html').read())

@app.route('/library')
def library():
    return render_template('library.html', books=books)

@app.route('/wiki/')
@app.route('/wiki/Corvus_Marinus')
def wiki():
    return make_response(open('templates/wiki.html').read())

@app.route('/wiki/Corvus_Marinus_Museum_of_Modern_Art')
def wikiMoma():
    return make_response(open('templates/wiki-moma.html').read())

def removeBar(string):
    return string.replace('|', '; ')
app.jinja_env.filters['removeBar'] = removeBar

if __name__ == '__main__':
    app.debug = True
    app.run(port=5000)
