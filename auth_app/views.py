import flask
from project.settings import database
from .models import User
from flask_login import current_user
import flask_login
from home_app import render_home, render_product

def render_auth():
    if flask.request.method == 'POST':
        if flask.request.form.get('class') == 'logout-form':
            flask_login.logout_user()
        elif flask.request.form.get('class') == 'delete-form':
            user = User.query.get(current_user.id)
            flask_login.logout_user()
            database.session.delete(user)
            database.session.commit()
        elif flask.request.form.get('class') == 'change-password-form':
            referer = flask.request.headers.get('Referer')
            old_password = flask.request.form['old_password']
            new_password = flask.request.form['new_password']
            user = User.query.get(current_user.id)
            if user.password == old_password:
                user.password = new_password
                database.session.commit()
            else:
                if 'product' in referer:
                    if 'error' in referer:
                        product_id, product_color, product_memory = referer.split('/')[-2].split('&')
                    else:
                        product_id, product_color, product_memory = referer.split('/')[-1].split('&')
                    return flask.redirect(f'/product/{product_id}&{product_color}&{product_memory}/error-password')
                elif 'order_processing' in referer:
                    try:
                        if 'error' in referer:
                            int(referer.split('/')[-2])
                        else:
                            int(referer.split('/')[-1])
                        return flask.redirect(f'/order_processing/{referer.split('/')[-1]}/error-password')
                    except:
                        return flask.redirect('/order_processing/error-password')
                return flask.redirect('/error-password')
        else:
            username = flask.request.form['login']
            password = flask.request.form['password']
            referer = flask.request.headers.get('Referer')
            if flask.request.form.get('class') == 'reg-form':
                user = User.query.filter_by(username=username).first()
                if user:
                    if 'product' in referer:
                        if 'error' in referer:
                            product_id, product_color, product_memory = referer.split('/')[-2].split('&')
                        else:
                            product_id, product_color, product_memory = referer.split('/')[-1].split('&')
                        return flask.redirect(f'/product/{product_id}&{product_color}&{product_memory}/error-reg')
                    elif 'order_processing' in referer:
                        try:
                            if 'error' in referer:
                                int(referer.split('/')[-2])
                            else:
                                int(referer.split('/')[-1])
                            return flask.redirect(f'/order_processing/{referer.split('/')[-1]}/error-reg')
                        except:
                            return flask.redirect('/order_processing/error-reg')
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
                        if 'error' in referer:
                            product_id, product_color, product_memory = referer.split('/')[-2].split('&')
                        else:
                            product_id, product_color, product_memory = referer.split('/')[-1].split('&')
                        return flask.redirect(f'/product/{product_id}&{product_color}&{product_memory}/error-auth')
                    elif 'order_processing' in referer:
                        try:
                            if 'error' in referer:
                                int(referer.split('/')[-2])
                                return flask.redirect(f'/order_processing/{referer.split('/')[-2]}/error-auth')
                            else:
                                int(referer.split('/')[-1])
                                return flask.redirect(f'/order_processing/{referer.split('/')[-1]}/error-auth')
                        except:
                            return flask.redirect('/order_processing/error-auth')
                    return flask.redirect('/error-auth')
            print(username, password)
        return flask.redirect(flask.request.referrer)
    flask.abort(404)