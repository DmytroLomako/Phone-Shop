import flask
from project.settings import database
from .models import User
from flask_login import current_user
import flask_login

def render_auth():
    if flask.request.method == 'POST':
        if flask.request.form.get('class') == 'logout-form':
            flask_login.logout_user()
        else:
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
    user_auth = False
    if current_user.is_authenticated:
        user_auth = current_user.username
    return flask.render_template('auth.html', user_auth = user_auth)