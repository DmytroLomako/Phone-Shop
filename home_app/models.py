from project.settings import database

class Product(database.Model):
    id = database.Column(database.Integer, primary_key=True)
    name = database.Column(database.String)
    price = database.Column(database.String)
    color = database.Column(database.String)
    memory = database.Column(database.String)
    description = database.Column(database.String)
    image = database.Column(database.String)
    def __repr__(self):
        return self.name