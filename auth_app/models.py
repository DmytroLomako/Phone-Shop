from project.settings import database

class User(database.Model):
    id = database.Column(database.Integer, primary_key=True)
    username = database.Column(database.String)
    password = database.Column(database.String)
    def __repr__(self):
        return self.username