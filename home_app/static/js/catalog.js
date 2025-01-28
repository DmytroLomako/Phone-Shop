let filterCheckbox = document.querySelectorAll('.filter-checkbox');
let filterForm = document.querySelector('.brand-filters-list');
let filterButton = document.querySelectorAll('.filters-l')
let filterMaxPrice = document.querySelector('.max-price-filter')
let filterMinPrice = document.querySelector('.min-price-filter')

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

const priceSlider = document.getElementById('price-range');
const minPrice = Number(priceSlider.dataset.minPrice);
const maxPrice = Number(priceSlider.dataset.maxPrice);
console.log(minPrice, maxPrice)

noUiSlider.create(priceSlider, {
    start: [minPrice, maxPrice], 
    connect: true,
    range: {
        'min': minPrice,
        'max': maxPrice
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