let memoryInput = document.querySelector('.new-product-input-memory input')
let dropdownMenuButton = document.getElementById('dropdown-menu-button')
let dropdownMenu = document.querySelector('.dropdown-menu');
let dropdownButtons = dropdownMenu.querySelectorAll('button')
let addNewProductText = document.querySelector('.add-new-product-text')
let cancelAddNewProduct = document.querySelector('.cancel-new-product')
let overlayAddNewProduct = document.querySelector('.new-product-overlay')

addNewProductText.addEventListener('click', () => {
    overlayAddNewProduct.style.display = 'flex';
})

cancelAddNewProduct.addEventListener('click', () => {
    overlayAddNewProduct.style.display = 'none';
})

dropdownMenuButton.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'flex'){
        dropdownMenu.style.display = 'none';
        dropdownMenuButton.style.transform = 'rotate(0)';
    } else{
        dropdownMenu.style.display = 'flex';
        dropdownMenuButton.style.transform = 'rotate(180deg)';
    }
})

dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
        memoryInput.value = button.textContent;
        dropdownMenu.style.display = 'none';
    })
})