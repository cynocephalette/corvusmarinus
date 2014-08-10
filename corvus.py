import os
from flask import Flask, request, make_response, g
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
#db = SQLAlchemy(app)

@app.route('/')
def corvus():
    return make_response(open('index.html').read())

if __name__ == '__main__':
    app.debug = True
    app.run(port=5000)
