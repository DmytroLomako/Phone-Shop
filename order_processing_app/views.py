import flask
from home_app.models import Product
from home_app.views import get_cart

def render_order_processing():
    list_product_cart, summary_price = get_cart()
    if flask.request.method == 'POST':
        return flask.redirect('/order_processing')
    return flask.render_template('order_processing.html', list_product_cart = list_product_cart, summary_price = summary_price)