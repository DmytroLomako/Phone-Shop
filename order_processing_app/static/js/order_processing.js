let formCities = document.querySelector('.form-cities')
let inputCities = formCities.querySelector('input')
let inputWarehouse = document.querySelector('.warehouse-input')
let buttonSubmit = document.querySelector('.button-submit-order')

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
    if (!chosenCity || !chosenWarehouse){
        event.preventDefault();
    }  
})