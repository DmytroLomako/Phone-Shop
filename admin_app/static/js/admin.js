let dropdownMenu = document.querySelectorAll('.dropdown-menu');
let addNewProductText = document.querySelector('.add-new-product-text');
let cancelAddNewProduct = document.querySelector('.cancel-new-product');
let cancelAddNewDiversity = document.querySelector('.cancel-new-diversity');
let overlayProduct = document.querySelector('.product-overlay');
let newProductDiv = document.querySelector('.new-product-div');
let newDiversityDiv = document.querySelector('.new-diversity-div');

addNewProductText.addEventListener('click', () => {
    overlayProduct.style.display = 'flex';
    newProductDiv.style.display = 'flex';
})

cancelAddNewProduct.addEventListener('click', () => {
    overlayProduct.style.display = 'none';
    newProductDiv.style.display = 'none';
})

cancelAddNewDiversity.addEventListener('click', () => {
    overlayProduct.style.display = 'none';
    newDiversityDiv.style.display = 'none';
})


dropdownMenu.forEach(menu => {
    let memoryInput = menu.parentElement.querySelector('.input');
    let dropdownButton = menu.previousElementSibling;
    let dropdownButtons = menu.querySelectorAll('button');
    dropdownButton.addEventListener('click', () => {
        if (menu.style.display === 'flex'){
            menu.style.display = 'none';
            dropdownButton.style.transform = 'rotate(0)';
        } else{
            menu.style.display = 'flex';
            dropdownButton.style.transform = 'rotate(180deg)';
        }
    })
    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            memoryInput.value = button.textContent;
            menu.style.display = 'none';
            dropdownButton.style.transform = 'rotate(0)';
        })
    })
})


let buttonEditList = document.querySelectorAll('.button-edit');
let chooseEditDiv = document.querySelector('.choose-edit');
let cancelChooseEdit = document.querySelector('.cancel-choose-edit');
let editMainProductText = document.querySelector('.edit-main-product-text');
let editMainProductForm = document.querySelector('.edit-main-product-form');
let editProductDiversityText = document.querySelector('.edit-diversity-product-text');
let editProductDiversityForm = document.querySelector('.edit-product-diversity-form');
let addProductDiversityText = document.querySelector('.add-diversity-product-text');
let addProductDiversityForm = document.querySelector('.add-diversity-product-form');

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

editProductDiversityText.addEventListener('click', () => {
    chooseEditDiv.style.display = 'none';
    editProductDiversityForm.querySelector('input').value = chooseEditDiv.id;
    editProductDiversityForm.submit();
})

addProductDiversityText.addEventListener('click', () => {
    chooseEditDiv.style.display = 'none';
    addProductDiversityForm.querySelector('input').value = chooseEditDiv.id;
    addProductDiversityForm.submit();
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