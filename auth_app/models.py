from project.settings import database
from flask_login import UserMixin

class User(database.Model, UserMixin):
    __tablename__ = 'user'
    id = database.Column(database.Integer, primary_key=True)
    username = database.Column(database.String)
    password = database.Column(database.String)
    order = database.relationship('Order', backref = 'user')
    def __repr__(self):
        return self.username