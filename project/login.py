import flask_login
from .settings import project
from auth_app.models import User


project.secret_key = 'key'
login_manager = flask_login.LoginManager(project)
@login_manager.user_loader
def load_user(id):
    return User.query.get(id)