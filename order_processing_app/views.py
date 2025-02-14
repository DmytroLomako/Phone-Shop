import flask
from project.aiogram import bot, id_admin
from home_app.models import Product
from home_app.views import get_cart, get_user_info
from flask_login import current_user
import requests, json

api = "Your Nova Poshta Api"
url = 'https://api.novaposhta.ua/v2.0/json/'
list_numbers = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣']

def get_cities():
    data = {
        "apiKey": api,
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

def render_order_processing(id = False, error = None):
    list_cities = get_cities()
    list_warehouses = []
    city = ''
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
        city = flask.request.form.get('city-div')
        data = {
            "apiKey": api,
            "modelName": "Address",
            "calledMethod": "getWarehouses",
            "methodProperties": {
                "CityName": city
            },
        }
        
        data = json.dumps(data)
        info = requests.post(url=url, data=data)
        response = json.loads(info.text)
        for i in response['data']:
            list_warehouses.append(i['Description'])
    user_auth, error_reg, error_auth, error_password = get_user_info(error)
    return flask.render_template('order_processing.html', list_product_cart = list_product_cart, summary_price = summary_price, username = username, account=current_user.is_authenticated, user=current_user, list_cities=list_cities, user_auth = user_auth, error = error, error_reg = error_reg, error_auth = error_auth, error_password = error_password, list_warehouses=list_warehouses, city=city)

async def render_order():
    list_product_cart, summary_price = get_cart()
    if flask.request.method == 'POST':
        city = flask.request.form.get('city')
        warehouse = flask.request.form.get('warehouse')
        name = current_user.username
        text = f'Нове замовлення!🚀\n\nІм\'я: {name}\nСумма: {summary_price} ₴\nМісто: {city}\n{warehouse}\n\nЗамовлення:\n'
        for product in list_product_cart:
            stickers_number = str(product[1])
            for i in stickers_number:
                stickers_number = stickers_number.replace(i, list_numbers[int(i)], 1)
            text += f'{product[0]} - {stickers_number} шт.\n'
        await bot.send_message(id_admin, text)
        return flask.redirect('/')
    return 'Hello'