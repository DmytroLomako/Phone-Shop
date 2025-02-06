import flask

admin_app = flask.Blueprint(
    name = 'admin_app',
    import_name = 'admin_app',
    template_folder = 'templates',
    static_folder ='static',
    static_url_path = '/admin/'
)