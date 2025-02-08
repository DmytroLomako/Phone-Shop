from project.settings import database

class Product(database.Model):
    __tablename__ = 'product'
    id = database.Column(database.Integer, primary_key=True)
    name = database.Column(database.String)
    brand = database.Column(database.String)
    price = database.Column(database.String)
    color = database.Column(database.String)
    memory = database.Column(database.String)
    description = database.Column(database.String)
    image = database.Column(database.String)
    order = database.relationship('Order', backref = 'product')
    product_diversity = database.relationship('ProductDiversity', cascade="all,delete", backref = 'product')
    def __repr__(self):
        return self.name
    
class ProductDiversity(database.Model):
    __tablename__ = 'product_diversity'
    id = database.Column(database.Integer, primary_key=True)
    price = database.Column(database.String)
    color = database.Column(database.String)
    memory = database.Column(database.String)
    description = database.Column(database.String)
    image = database.Column(database.String)
    product_id = database.Column(database.Integer, database.ForeignKey('product.id', ondelete='CASCADE', name = 'product_id'))
    
class Order(database.Model):
    __tablename__ = 'order'
    id = database.Column(database.Integer, primary_key=True)
    user_id = database.Column(database.Integer, database.ForeignKey('user.id', name = 'review_user'))
    product_id = database.Column(database.Integer, database.ForeignKey('product.id'))
    product_color = database.Column(database.String)
    product_memory = database.Column(database.String)
    def __repr__(self):
        return self.id