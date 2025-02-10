let memoryInput = document.querySelector('.new-product-input-memory input');
let dropdownMenuButton = document.querySelector('dropdown-menu-button');
let dropdownMenu = document.querySelector('.dropdown-menu');
let dropdownButtons = dropdownMenu.querySelectorAll('button');
let addNewProductText = document.querySelector('.add-new-product-text');
let cancelAddNewProduct = document.querySelector('.cancel-new-product');
let overlayProduct = document.querySelector('.product-overlay');
let newProductDiv = document.querySelector('.new-product-div');

addNewProductText.addEventListener('click', () => {
    overlayProduct.style.display = 'flex';
    newProductDiv.style.display = 'flex';
})

cancelAddNewProduct.addEventListener('click', () => {
    overlayProduct.style.display = 'none';
    newProductDiv.style.display = 'none';
})

if (dropdownMenuButton){
    dropdownMenuButton.addEventListener('click', () => {
        if (dropdownMenu.style.display === 'flex'){
            dropdownMenu.style.display = 'none';
            dropdownMenuButton.style.transform = 'rotate(0)';
        } else{
            dropdownMenu.style.display = 'flex';
            dropdownMenuButton.style.transform = 'rotate(180deg)';
        }
    })
}

dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
        memoryInput.value = button.textContent;
        dropdownMenu.style.display = 'none';
    })
})

let buttonEditList = document.querySelectorAll('.button-edit')
let chooseEditDiv = document.querySelector('.choose-edit')
let cancelChooseEdit = document.querySelector('.cancel-choose-edit')
let editMainProductText = document.querySelector('.edit-main-product-text')
let editMainProductForm = document.querySelector('.edit-main-product-form')
let editProductDiversityText = document.querySelector('.edit-diversity-product-text')
let addProductDiversityText = document.querySelector('.add-diversity-product-text')

buttonEditList.forEach(button => {
    button.addEventListener('click', () => {
        overlayProduct.style.display = 'flex';
        chooseEditDiv.style.display = 'flex';
        chooseEditDiv.querySelector('h1').textContent = button.value;
        chooseEditDiv.id = button.id;
    })
})

cancelChooseEdit.addEventListener('click', () => {
    chooseEditDiv.style.display = 'none';
    overlayProduct.style.display = 'none';
})

editMainProductText.addEventListener('click', () => {
    chooseEditDiv.style.display = 'none';
    editMainProductForm.querySelector('input').value = chooseEditDiv.id;
    editMainProductForm.submit();
})

let editMainProduct = document.querySelector('.edit-main-product')
let cancelEditMainProduct = document.querySelector('.cancel-edit-main')
let memoryInput2 = document.querySelector('.edit-product-input-memory input');
let dropdownMenuButton2 = document.querySelector('.dropdown-menu-button2');
let dropdownMenu2 = document.querySelector('.dropdown-menu2');

if (editMainProduct){
    let dropdownButtons2 = dropdownMenu2.querySelectorAll('button');
    cancelEditMainProduct.addEventListener('click', () => {
        editMainProduct.style.display = 'none';
        overlayProduct.style.display = 'none';
    })
    dropdownMenuButton2.addEventListener('click', () => {
        if (dropdownMenu2.style.display === 'flex'){
            dropdownMenu2.style.display = 'none';
            dropdownMenuButton2.style.transform = 'rotate(0)';
        } else{
            dropdownMenu2.style.display = 'flex';
            dropdownMenuButton2.style.transform = 'rotate(180deg)';
        }
    })
    
    dropdownButtons2.forEach(button => {
        button.addEventListener('click', () => {
            memoryInput2.value = button.textContent;
            dropdownMenu2.style.display = 'none';
        })
    })
}