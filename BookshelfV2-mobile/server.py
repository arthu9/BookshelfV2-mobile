from flask import Flask, jsonify, request, make_response, render_template
from flask import render_template, request
from app import app
from flask_cors import CORS, cross_origin
import os


server = Flask(__name__)


@server.route('/login', methods=['GET','POST'])
def login():
    if request.method=='POST':

        user = User.query.filter_by(username=request.form['username']).first()

        if user is None:
            flash('Username or password invalid!')
            return redirect(url_for('login'))
        else:
            if check_password_hash(user.password_hash, request.form['password']):
                session['username'] = user.username
                session['first_name'] = user.first_name

                if session['username']:
                    return redirect('userprofile.html')

    return render_template("login.html")


@server.route('/<int:userid>')
def userprofile(userid):
	return render_template('userprofile.html', userid=userid)

CORS(server)
server.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@127.0.0.1:5432/bookshelf'
server.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
dc = SQLAlchemy(server)
server.config['USE_SESSION_FOR_NEXT'] = True
server.config['CORS_HEADERS'] = 'Content-Type'
server.config['SECRET_KEY'] = 'thisisthesecretkey'

server.secret_key = os.urandom(24)

if __name__ == '__main__':
    app.run (debug=True)
