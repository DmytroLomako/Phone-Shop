import flask

def render_order_processing():
    if flask.request.method == 'POST':
        return flask.redirect('/order_processing')
    return flask.render_template('order_processing.html')