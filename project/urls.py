import home_app, auth_app, order_processing_app, admin_app
from .settings import project

home_app.home_app.add_url_rule('/', view_func = home_app.render_home, methods = ['GET', 'POST'])
home_app.home_app.add_url_rule('/<string:error>', view_func = home_app.render_home, methods = ['GET', 'POST'])
home_app.home_app.add_url_rule('/product/<int:product_id>&<string:product_color>&<string:product_memory>/<string:error>', view_func = home_app.render_product, methods = ['GET', 'POST'])
home_app.home_app.add_url_rule('/product/<int:product_id>&<string:product_color>&<string:product_memory>', view_func = home_app.render_product, methods = ['GET', 'POST'])
auth_app.auth_app.add_url_rule('/auth', view_func = auth_app.render_auth, methods = ['GET', 'POST'])
order_processing_app.order_processing_app.add_url_rule('/order_processing', view_func = order_processing_app.render_order_processing, methods = ['GET', 'POST'])
order_processing_app.order_processing_app.add_url_rule('/order_processing/<int:id>', view_func = order_processing_app.render_order_processing, methods = ['GET', 'POST'])
admin_app.admin_app.add_url_rule('/admin', view_func = admin_app.render_admin, methods = ['GET', 'POST'])

project.register_blueprint(home_app.home_app)
project.register_blueprint(auth_app.auth_app)
project.register_blueprint(order_processing_app.order_processing_app)
project.register_blueprint(admin_app.admin_app)