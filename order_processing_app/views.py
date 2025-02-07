import flask
from home_app.models import Product
from home_app.views import get_cart
from flask_login import current_user

def render_order_processing(id = False):
    if id:
        product = Product.query.get(id)
        list_product_cart = [[product, 1]]
        summary_price = product.price
    else:
        list_product_cart, summary_price = get_cart()
    print(list_product_cart[0])
    username = 'Anonymous'
    if current_user.is_authenticated:
        username = current_user.username
    if flask.request.method == 'POST':
        return flask.redirect('/order_processing')
    return flask.render_template('order_processing.html', list_product_cart = list_product_cart, summary_price = summary_price, username = username, account=current_user.is_authenticated, user=current_user)