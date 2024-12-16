import flask, os
import flask_migrate, flask_sqlalchemy

project = flask.Flask(
    import_name = 'shop',
    template_folder = 'templates',
)