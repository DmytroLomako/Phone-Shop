import flask
from home_app.models import Product

def render_order_processing():
    list_product_cart_id = []
    products_cart = flask.request.cookies.get('product')
    if products_cart != None:
        list_product_cart_id = products_cart.split(',')
    list_product_cart = []
    for id in list_product_cart_id:
        product_cart = Product.query.get(id)
        if product_cart != None:
            list_product_cart.append(product_cart)
    list_product_cart = list(set(list_product_cart))
    if flask.request.method == 'POST':
        return flask.redirect('/order_processing')
    return flask.render_template('order_processing.html', list_product_cart = list_product_cart)