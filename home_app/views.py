import flask
from project.settings import database
from .models import Product

def render_home():
    list_products = Product.query.all()
    return flask.render_template('catalog.html', list_products = list_products)

def render_product(product_id):
    product = Product.query.get(product_id)
    return flask.render_template('product.html', product = product)