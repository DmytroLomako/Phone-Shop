let filterCheckbox = document.querySelectorAll('.filter-checkbox');
let filterForm = document.querySelector('.brand-filters-list');
let filterButton = document.querySelectorAll('.filters-l');
let filterMaxPrice = document.querySelector('.max-price-filter');
let filterMinPrice = document.querySelector('.min-price-filter');
let priceFilterButton = document.querySelector('.price-filter-button');
let maxPriceAll = Number(document.querySelector('.max-all').value)
let minPriceAll = Number(document.querySelector('.min-all').value)
const priceSlider = document.getElementById('price-range');
const minPrice = Number(priceSlider.dataset.minPrice);
const maxPrice = Number(priceSlider.dataset.maxPrice);


noUiSlider.create(priceSlider, {
    start: [minPrice, maxPrice], 
    connect: true,
    range: {
        'min': minPriceAll,
        'max': maxPriceAll
    },
    format: {
        to: function (value) {
            return Math.round(value);
        },
        from: function (value) {
            return Number(value);
        }
    }
});
priceSlider.noUiSlider.on('update', function (values, handle) {
    if (handle === 0) {
        filterMinPrice.value = values[0];
    } else {
        filterMaxPrice.value = values[1];
    }
});

filterMaxPrice.addEventListener('input', (event) => {
    if (Number(filterMaxPrice.value) < Number(filterMinPrice.value) || Number(filterMaxPrice.value) > Number(filterMaxPrice.id)){
        priceFilterButton.disabled = true;
        filterMaxPrice.style.color = '#be0202';
    } else {
        priceFilterButton.disabled = false;
        filterMaxPrice.style.color = 'black';
        filterMinPrice.style.color = 'black';
        priceSlider.noUiSlider.set([null, Number(filterMaxPrice.value)]);
    }
})

filterMinPrice.addEventListener('input', (event) => {
    if (Number(filterMinPrice.value) > Number(filterMaxPrice.value) || Number(filterMinPrice.value) < Number(filterMinPrice.id)){
        priceFilterButton.disabled = true;
        filterMinPrice.style.color = '#be0202';
    } else {
        priceFilterButton.disabled = false;
        filterMinPrice.style.color = 'black';
        filterMaxPrice.style.color = 'black';
        priceSlider.noUiSlider.set([Number(filterMinPrice.value), null]);
    }
})

filterButton.forEach(function (button) {
    button.addEventListener('click', function (event){
        let input = button.querySelector('input')
        if (event.target !== input){
            input.checked = !input.checked;
        }
    })
})

filterCheckbox.forEach(function (checkbox) {
    checkbox.addEventListener('change', function (){
        console.log(checkbox)
        filterForm.submit();
    })
})