import flask

def render_home():
    return flask.render_template('catalog.html')

def render_product():
    return flask.render_template('product.html')