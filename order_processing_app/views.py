import flask
from home_app.models import Product
from home_app.views import get_cart
from flask_login import current_user
import requests, json


def get_cities():
    url = 'https://api.novaposhta.ua/v2.0/json/'
    data = {
        "apiKey": "Your Nova Poshta Api",
        "modelName": "Address",
        "calledMethod": "getCities",
        "methodProperties": {},
        "Limit": "60"
    }
    data = json.dumps(data)
    info = requests.post(url=url, data=data)
    print(info)
    response = json.loads(info.text)
    list_cities = ["Київ","Харків","Одеса","Дніпро","Донецьк","Запоріжжя","Львів","Кривий Ріг","Миколаїв","Маріуполь","Севастополь" ,"Луганськ","Вінниця","Сімферополь","Макіївка","Херсон","Чернігів","Полтава","Черкаси","Хмельницький","Чернівці","Житомир","Суми"]
    for i in response['data']:
        if i not in list_cities:
            list_cities.append(i['Description'])
    return list_cities

def render_order_processing(id = False):
    list_cities = get_cities()
    if id:
        product = Product.query.get(id)
        list_product_cart = [[product, 1]]
        summary_price = product.price
    else:
        list_product_cart, summary_price = get_cart()
    print(list_product_cart[0])
    username = 'Anonymous'
    if current_user.is_authenticated:
        username = current_user.username
    if flask.request.method == 'POST':
        return flask.redirect('/order_processing')
    return flask.render_template('order_processing.html', list_product_cart = list_product_cart, summary_price = summary_price, username = username, account=current_user.is_authenticated, user=current_user, list_cities=list_cities)