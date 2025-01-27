let filterCheckbox = document.querySelectorAll('.filter-checkbox');
let filterForm = document.querySelector('.brand-filters-list');
let filterButton = document.querySelectorAll('.filters-l')
let filterMaxPrice = document.querySelector('.max-price-filter')
let filterMinPrice = document.querySelector('.min-price-filter')

filterMinPrice.addEventListener('blur', () => {
    filterForm.submit();
})

filterMaxPrice.addEventListener('blur', () => {
    filterForm.submit();
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