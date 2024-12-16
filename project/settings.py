import flask, os
import flask_migrate, flask_sqlalchemy

project = flask.Flask(
    import_name = 'project',
    template_folder = 'templates',
    instance_path = os.path.abspath(__file__ + '/../../instance')
)

project.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
database = flask_sqlalchemy.SQLAlchemy(project)
migrations = flask_migrate.Migrate(project, database)