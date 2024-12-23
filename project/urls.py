import home_app, auth_app
from .settings import project

home_app.home_app.add_url_rule('/', view_func = home_app.render_home, methods = ['GET', 'POST'])
home_app.home_app.add_url_rule('/product/<int:product_id><string:product_color>&<string:product_memory>', view_func = home_app.render_product, methods = ['GET', 'POST'])
auth_app.auth_app.add_url_rule('/auth', view_func = auth_app.render_auth, methods = ['GET', 'POST'])

project.register_blueprint(home_app.home_app)
project.register_blueprint(auth_app.auth_app)