let dropdownMenu = document.querySelectorAll('.dropdown-menu');
let newProductDiv = document.querySelector('.new-product-div');
let addNewProductText = document.querySelector('.add-new-product-text');
let overlayProduct = document.querySelector('.product-overlay');
let cancelButtons = document.querySelectorAll('.cancel')

addNewProductText.addEventListener('click', () => {
    overlayProduct.style.display = 'flex';
    newProductDiv.style.display = 'flex';
})

cancelButtons.forEach(button => {
    button.addEventListener('click', () => {
        overlayProduct.style.display = 'none';
        button.parentElement.parentElement.style.display = 'none';
    })
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
let removeProductDiversityText = document.querySelector('.remove-diversity-product-text');
let removeProductDiversityForm = document.querySelector('.remove-diversity-product-form');

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

function sendForm(form){
    chooseEditDiv.style.display = 'none';
    form.querySelector('input').value = chooseEditDiv.id;
    form.submit();
}

editMainProductText.addEventListener('click', () => {
    sendForm(editMainProductForm);
})

editProductDiversityText.addEventListener('click', () => {
    sendForm(editProductDiversityForm);
})

addProductDiversityText.addEventListener('click', () => {
    sendForm(addProductDiversityForm);
})

removeProductDiversityText.addEventListener('click', () => {
    sendForm(removeProductDiversityForm);
})

let editMainProduct = document.querySelector('.edit-main-product')
let memoryInput2 = document.querySelector('.edit-product-input-memory input');
let dropdownMenuButton2 = document.querySelector('.dropdown-menu-button2');
let dropdownMenu2 = document.querySelector('.dropdown-menu2');

if (editMainProduct){
    let dropdownButtons2 = dropdownMenu2.querySelectorAll('button');
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

let showOrRemoveText = document.querySelectorAll('.show_or_remove_p');
let editForm = document.querySelector('.edit-diversity-form');
let removeForm = document.querySelector('.remove-diversity-form');

showOrRemoveText.forEach(text => {
    text.addEventListener('click', () => {
        if (editForm){
            editForm.querySelector('input').value = text.id;
            editForm.submit();
        } else if (removeForm){
            removeForm.querySelector('input').value = text.id;
            removeForm.submit();
        }
    })
})