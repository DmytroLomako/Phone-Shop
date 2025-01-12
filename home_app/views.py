import flask
from project.settings import database
from .models import Product, Order
from flask_login import current_user

def render_home(error = None):
    list_products = Product.query.all()
    user_auth = False
    error_reg = None
    error_auth = None
    if current_user.is_authenticated:
        user_auth = current_user.username
    if error != None:
        if 'reg' in error:
            error_reg = 'Користувач вже існує'
        else:
            error_auth = 'Невірний логін або пароль'
    return flask.render_template('catalog.html', list_products = list_products, user_auth = user_auth, error_reg = error_reg, error_auth = error_auth)

def render_product(product_id, product_color, product_memory, error = None):
    list_colors = ['black', 'violet', 'midnightblue', 'darkblue', 'gold', 'green', 'red']
    list_memory = ['64GB', '128GB', '256GB', '512GB', '1TB']
    product = Product.query.get(product_id)
    color_index = list_colors.index(product_color)
    memory_index = list_memory.index(product_memory)
    list_colors[color_index] += ' active'
    list_memory[memory_index] += ' active'
    if flask.request.method == 'POST' and flask.request.form.get('class') != 'auth-form':
        if flask.request.form.get('class') == 'buy-form':
            if current_user.is_authenticated:
                order = Order(user_id = current_user.id, product_id = product_id, product_color = product_color, product_memory = product_memory)
                database.session.add(order)
                database.session.commit()
                return flask.redirect('/')
        else:
            if flask.request.form.get('memory_button'):
                product_memory = flask.request.form.get('memory_button')
            if flask.request.form.get('color_button'):
                product_color = flask.request.form.get('color_button')
            return flask.redirect(f'/product/{product_id}&{product_color}&{product_memory}')
    user_auth = False
    if current_user.is_authenticated:
        user_auth = current_user.username
    print(error)
    error_reg = None
    error_auth = None
    if error != None:
        if 'reg' in error:
            error_reg = 'Користувач вже існує'
        else:
            error_auth = 'Невірний логін або пароль'
    return flask.render_template('product.html', product = product, colors = list_colors, memories = list_memory, active_color = product_color, active_memory = product_memory, user_auth = user_auth, error = error, error_reg = error_reg, error_auth = error_auth)