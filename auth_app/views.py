import flask
from project.settings import database
from .models import User
from flask_login import current_user
import flask_login

def render_auth():
    if flask.request.method == 'POST':
        username = flask.request.form['login']
        password = flask.request.form['password']
        print(flask.request.form.get('class'))
        if flask.request.form.get('class') == 'reg-form':
            user = User(username=username, password=password)
            database.session.add(user)
            database.session.commit()
        elif flask.request.form.get('class') == 'auth-form':
            user = User.query.filter_by(username=username, password=password).first()
            if user:
                flask_login.login_user(user)
            else:
                return 'Неправильний логін або пароль'
        print(username, password)
        return flask.redirect('/')
    return flask.render_template('auth.html')