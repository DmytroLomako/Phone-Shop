import flask
from project.settings import database
from .models import Product

def render_home():
    list_products = Product.query.all()
    return flask.render_template('catalog.html', list_products = list_products)

def render_product(product_id, product_color, product_memory):
    list_colors = ['black', 'violet', 'midnightblue', 'darkblue', 'gold', 'green', 'red']
    list_memory = ['64GB', '128GB', '256GB', '512GB', '1TB']
    product = Product.query.get(product_id)
    color_index = list_colors.index(product_color)
    memory_index = list_memory.index(product_memory)
    list_colors[color_index] += ' active'
    list_memory[memory_index] += ' active'
    if flask.request.method == 'POST':
        if flask.request.form.get('memory_button'):
            product_memory = flask.request.form.get('memory_button')
        if flask.request.form.get('color_button'):
            product_color = flask.request.form.get('color_button')
        print(1)
        return flask.redirect(f'/product/{product_id}{product_color}&{product_memory}')
    return flask.render_template('product.html', product = product, colors = list_colors, memories = list_memory, active_color = product_color, active_memory = product_memory)