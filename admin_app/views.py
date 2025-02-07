import flask
from home_app.models import Product
from flask_login import current_user


def render_admin():
    if current_user.is_authenticated and current_user.is_admin:
        all_products = Product.query.all()
        list_colors = []
        list_memories = []
        list_images = []
        for product in all_products:
            for diversity in product.product_diversity:
                if [product.id, diversity.color] not in list_colors:
                    list_colors.append([product.id, diversity.color])
                    list_images.append([product.id, diversity.image])
                if [product.id, diversity.memory] not in list_memories:
                    list_memories.append([product.id, diversity.memory])
        return flask.render_template('admin.html', all_products=all_products, list_colors=list_colors, list_memories=list_memories, list_images=list_images, account=current_user.is_authenticated, user=current_user)
    flask.abort(404)