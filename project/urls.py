import home_app
from .settings import project

home_app.home_app.add_url_rule('/', view_func = home_app.render_home, methods = ['GET', 'POST'])
home_app.home_app.add_url_rule('/product/<int:product_id>', view_func = home_app.render_product)

project.register_blueprint(home_app.home_app)