import flask

auth_app = flask.Blueprint(
    name = 'auth_app',
    import_name = 'auth_app',
    template_folder = 'templates',
    static_folder ='static',
    static_url_path = '/auth/'
)