import flask
from project.settings import database
from .models import User

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
                print('User authenticated successfully')
            else:
                flask.redirect('/')
        print(username, password)
        return flask.redirect('/')
    return flask.render_template('auth.html')