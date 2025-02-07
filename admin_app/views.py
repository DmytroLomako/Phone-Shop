import flask, os
from home_app.models import Product, ProductDiversity
from home_app.views import get_cart
from project.settings import database
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
        list_product_cart, summary_price = get_cart()
        if flask.request.method == 'POST':
            if 'add_product_form' in flask.request.form:
                name = flask.request.form.get('name')
                image = flask.request.files['image']
                brand = flask.request.form.get('brand')
                price = flask.request.form.get('price')
                color = flask.request.form.get('color')
                memory = flask.request.form.get('memory')
                description = flask.request.form.get('description')
                image_folder = name.lower().replace(' ', '-')
                image_path = f'{image_folder}/{color}.webp'
                image_full_path = os.path.abspath(__file__ + f'/../../home_app/static/img/phones/{image_path}')
                os.makedirs(os.path.dirname(image_full_path), exist_ok=True)
                image.save(image_full_path)
                product = Product(name=name, brand=brand, price=price, color=color, memory=memory, description=description, image=image_path)
                database.session.add(product)
                product_diversity = ProductDiversity(price=price, color=color, memory=memory, description=description, image=image_path, product=product)
                database.session.add(product_diversity)
                database.session.commit()
            else:
                product_id = flask.request.form.get('product_id')
                product = Product.query.get(product_id)
                image_folder = product.name.lower().replace(' ', '-')
                image_path = f'{image_folder}/{product.color}.webp'
                image_full_path = os.path.abspath(__file__ + f'/../../home_app/static/img/phones/{image_path}')
                os.remove(image_full_path)
                database.session.delete(product)
                database.session.commit()
        return flask.render_template('admin.html', all_products=all_products, list_colors=list_colors, list_memories=list_memories, list_images=list_images, account=current_user.is_authenticated, user=current_user, list_product_cart=list_product_cart, summary_price=summary_price)
    flask.abort(404)