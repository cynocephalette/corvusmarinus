import os
from flask import Flask, request, make_response, render_template, g
from flask.ext.sqlalchemy import SQLAlchemy

from books import books

app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
#db = SQLAlchemy(app)

@app.route('/')
def corvus():
    return make_response(open('index.html').read())

@app.route('/library')
def library():
    return render_template('library.html', books=books)

if __name__ == '__main__':
    app.debug = True
    app.run(port=5000)
