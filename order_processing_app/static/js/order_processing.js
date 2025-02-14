let formCities = document.querySelector('.form-cities')
let inputCities = formCities.querySelector('input')
let inputWarehouse = document.querySelector('.warehouse-input')
let buttonSubmit = document.querySelector('.button-submit-order')
let inputCitySubmit = document.querySelector('.city-submit')
let inputWarehouseSubmit = document.querySelector('.warehouse-submit')

let city;

inputCities.addEventListener('focus', () => {
    city = inputCities.value
})

inputCities.addEventListener('blur', () => {
    if (city !== inputCities.value){
        formCities.submit()
    }
})

buttonSubmit.addEventListener('click', (event) => {
    let chosenCity = document.getElementById(`city-${inputCities.value}`);
    let chosenWarehouse = document.getElementById(`warehouse-${inputWarehouse.value}`);
    inputCitySubmit.value = inputCities.value;
    inputWarehouseSubmit.value = inputWarehouse.value;
    if (!chosenCity || !chosenWarehouse){
        event.preventDefault();
    } /* else {
        document.cookie = `product = ; path=/`
    } */
})