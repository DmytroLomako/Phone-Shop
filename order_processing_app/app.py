import flask

order_processing_app = flask.Blueprint(
    name = 'order_processing_app',
    import_name = 'order_processing_app',
    template_folder = 'templates',
    static_folder ='static',
    static_url_path = '/order_processing/'
)