import flask
from project.settings import database
from .models import User
from flask_login import current_user
import flask_login
from home_app import render_home, render_product

def render_auth():
    print('sjnvkhnvkvhnkjhvnkgjvhbgjk')
    if flask.request.method == 'POST':
        if flask.request.form.get('class') == 'logout-form':
            flask_login.logout_user()
        else:
            username = flask.request.form['login']
            password = flask.request.form['password']
            referer = flask.request.headers.get('Referer')
            if flask.request.form.get('class') == 'reg-form':
                user = User.query.filter_by(username=username).first()
                if user:
                    if 'product' in referer:
                        product_id, product_color, product_memory = referer.split('/')[-1].split('&')
                        return flask.redirect(f'/product/{product_id}&{product_color}&{product_memory}/error-reg')
                    return flask.redirect('/error-reg')
                else:
                    user = User(username=username, password=password)
                    database.session.add(user)
                    database.session.commit()
            elif flask.request.form.get('class') == 'auth-form':
                user = User.query.filter_by(username=username, password=password).first()
                if user:
                    flask_login.login_user(user)
                else:
                    if 'product' in referer:
                        product_id, product_color, product_memory = referer.split('/')[-1].split('&')
                        return flask.redirect(f'/product/{product_id}&{product_color}&{product_memory}/error-auth')
                    return flask.redirect('/error-auth')
            print(username, password)
    return flask.redirect('/')