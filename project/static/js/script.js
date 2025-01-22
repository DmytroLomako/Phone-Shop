const searchInput = document.querySelector('.search-form__input');
const overlay = document.querySelector('.overlay');

searchInput.addEventListener('focus', () => {
    overlay.style.display = 'block';
});

searchInput.addEventListener('blur', () => {
    overlay.style.display = 'none';
});

const passwordsInput = document.querySelectorAll('.password');
passwordsInput.forEach(function(passwordInput){
    passwordInput.addEventListener('click', function(e) {
        const clickX = e.offsetX;
        const inputWidth = this.offsetWidth;
        
        if (inputWidth - clickX <= 40) {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordInput.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.79 17.5 12 17.5C8.21 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z' fill='%23797878'/%3E%3Cpath d='M2 2L22 22' stroke='%23797878' stroke-width='2'/%3E%3C/svg%3E")`;
            } else {
                passwordInput.type = 'password';
                passwordInput.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z' fill='%23797878'/%3E%3C/svg%3E")`;
            }
        }
    });
    passwordInput.addEventListener('mousemove', function(e) {
        const clickX = e.offsetX;
        const inputWidth = this.offsetWidth;
    
        if (inputWidth - clickX <= 40) {
            this.style.cursor = 'pointer';
        } else {
            this.style.cursor = 'text';
        }
    });
})

const buttonUser = document.getElementById('button-user');
const buttonCart = document.querySelectorAll('.cart');
const overlayReg = document.querySelector('.overlay-reg');
const regLink = document.querySelector('.reg-link-reg');
const authLink = document.querySelector('.reg-link-auth');
const auth = document.querySelector('.auth');
const reg = document.querySelector('.reg');
const cart = document.querySelector('.cart-div');
const account = document.querySelector('.account');
const cancel = document.querySelectorAll('cancel');
const errorText = document.querySelector('.error-text');
const changePassword = document.querySelector('.change-password-div');

if (errorText) {
    overlayReg.style.display = 'flex';
    if (errorText.id === 'reg_error') {
        reg.style.display = 'flex';
    } else if (errorText.id === 'auth_error') {
        auth.style.display = 'flex';
    }
    else {
        changePassword.style.display = 'flex';
    }
}

buttonUser.addEventListener('click', () => {
    overlayReg.style.display = 'flex';
    account.style.display = 'flex';
    auth.style.display = 'flex';
    changePassword.style.display = 'none';
});
buttonCart.forEach(button => {
    button.addEventListener('click', (event) => {
        overlayReg.style.display = 'flex';
        cart.style.display = 'flex';
    });
});

overlayReg.addEventListener('click', (e) => {
    if (e.target === overlayReg || e.target.classList.contains('cancel')){
        overlayReg.style.display = 'none';
        account.style.display = 'none';
        cart.style.display = 'none';
        auth.style.display = 'none';
        reg.style.display = 'none';
    }
    else {
        console.log('overlay');
    }
});

cancel.forEach(button => {
    button.addEventListener('click', () => {
        overlayReg.style.display = 'none';
        account.style.display = 'none';
        cart.style.display = 'none';
        auth.style.display = 'none';
        reg.style.display = 'none';
    });
});

regLink.addEventListener('click', () => {
    reg.style.display = 'flex';
    auth.style.display = 'none';
});
authLink.addEventListener('click', () => {
    reg.style.display = 'none';
    auth.style.display = 'flex';
});

let changePasswordButton = document.querySelector('.change-password-button')
let cancelLink = document.querySelector('.cancel-link')

changePasswordButton.addEventListener('click', () => {
    changePassword.style.display = 'flex';
    account.style.display = 'none';
});
cancelLink.addEventListener('click', () => {
    changePassword.style.display = 'none';
    account.style.display = 'flex';
});


const buttonList = document.querySelectorAll('.blue-cart-b')

function changeTotalPrice(priceElem, change = 1){
    let cartTotal = document.querySelector('.cart-total');
    let currentPrice = parseInt(cartTotal.querySelector('h1').textContent.split(' ₴')[0].replaceAll(' ', ''));
    let productPrice = parseInt(priceElem.textContent.split(' ₴')[0].replaceAll(' ', ''))
    currentPrice += productPrice * change
    let finalPrice = ''
    for (let i = 0; i < String(currentPrice).length; i++){
        if (i % 3 == 0){
            finalPrice += ' '
        }
        let index = String(currentPrice).length - 1 - i
        finalPrice += String(currentPrice)[index]
    }
    finalPrice = finalPrice.split('').reverse().join('')
    cartTotal.querySelector('h1').textContent = `${finalPrice} ₴`
}

for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener('click', (event) => {
        try {
            let productId = buttonList[i].id.split('-')[1];
            let oldProduct = document.querySelector(`.cartProduct-${productId}`)
            let productItem = buttonList[i].closest('li')
            if (oldProduct){
                let productCount = oldProduct.querySelector('.product-count')
                productCount.value = Number(productCount.value) + 1;
                changeTotalPrice(productItem.querySelector('h1'))
            } else{
                let productsInCart = document.querySelector('.cart-div');
                let cartItem = document.createElement('div');
                changeTotalPrice(productItem.querySelector('h1'))
                cartItem.classList.add(`cartProduct-${productId}`)
                cartItem.innerHTML = `
                    <input class="button-add" type="checkbox" name="" id="" checked>
                    <div class="image-handler">
                        <img src="${productItem.querySelector('img').src}" alt="">
                    </div>
                    <p class="cart-item-description">${productItem.querySelector('h2').textContent}</p>
                    <div class="cart-item-interaction">
                        <button class="delete-cart-item" id="product-${productId}">
                            <svg class="basket-cover" width="25" height="6" viewBox="0 0 25 6" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="25" height="6" fill="url(#pattern0_135_271)"/><defs><pattern id="pattern0_135_271" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_135_271" transform="scale(0.015625 0.0651042)"/></pattern><image id="image0_135_271" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6ElEQVR4nO2baYgcRRTHGy+88PggXiheKGLwWgURNQGDEDGIYjNTbzaJBw5+8EKF9UBW1EA0RLOZVxVGJJGAKJuoSCAaEhVkEQmeiIIkQQQxEHTRiAqS5C9vtmV7aqt2e8eqGWftPxTsh/9S9X79ul71654kKVWqVGxVNM4gxibF2EcamG60PIy3agYXJHMo+J9nCnzKYIzL/yb9LmJsmnXwkxBGk36XKpD23ttB49ek30VWUKH9/3nRXAaQjuIIMjhHMa4hg5QMhojRJMY2xfhaMX7v+P6frAp/KcaPxPhE9gRirCCDutJYTAYDKePYeAGuwlESIBkslEllcqWxQQIkxm5i7P+3AQYZjHEBpDQ2ty6AXIiJCzJQbeC0jgFQrwMLNEoAnYr+7xlQqtSkSOM3SSfF+DPbdcez8iTVYLeUvaxUyW48llWKbdnOLOVrNKsgUiabSmOkVdImKstT2c49pDQeaFWciVK3NNvN06zsSTVamJXdgdYuz7hIKpXs9mRwooxl63FkElpKY2ev7+XCg/FdeACMD3seWPHxUXAAJGnc+8AKDaXxZnAASu7Z/rkFdHgAjMf7JgMYT4YHoHFHH2XA3cEBkMGiaSZ9hxiXVtbiLNJ4mhgHCyxyVXU1TpahNF6Y8apqHJAsXNLEmdUGrlAaH0zjXRwcQNXgMt+EEkQbLI29MwU0BfAsS1vrKdXjrWlcGRxAyjjFN2FlBOdawXwbGoDS+DTvH1yDS3zepWtxengAozjU9/wvKWkF83EEANvz/loDCzyZcrDexOHBAYhIY48n5W5IcmrtCeEBbLT8t3q8e5NYIsZnnkkreZ9ivBphD2ha/rs8vi+jAVCMLZ4F3mP5OAKAFZb/EWemMLZGA0CMdZ4FPtYGQOOZ4AAMhiz/cg+AV+IB0O5JSeN5C8BDEQDULb8pkilhATDu91B/2fLdHhpAjXFb3q8Yrzt9DTwYD4BB6gHwhgXg5ggArrcAbC2yIQdVzeBaD4D3LQDXBQfQwOUWgB3OtWjMjwZgkHGeZ9Iv2nwG80IDkOcMy7/L6Wvg/HgAVuIYTwZ8n/fJUTQ0gLSJ49v8nm8OaiM4LhqAfHPUArAvyanexNFBATD2Dw/jkH+88rfrWC7vIpPYUp7mqH3+bnWPAwFQGj/lvctexAke7674ANjdHE1HcFKR54YOAezMewfX4GyPbyw6API0R+3NhxjfBAPA2JH3SkUo8sAURcrTHK0ZXGX5xgJugu+2eeUFidvXiA+APc1Rg0UWgM0BAbxW6ECm8UR8ANrTHDUgy7chIABjAag7s5BxZ3QA5GmOKsa9bT7G6mAAGM/mvYrxqGcNN0YHUPU0R+1ePDGGAwJ42ALwnMsna4sOIPU0R6W1XeTJsRMAdmorjZecviZOjQ9g1N0cVRrrLQBLggFo4BYLwEbH/AfmD+Ow6AB8hxzFeDvJiRq4KSCABW1exnsO356kWyJHc1ROiHlPRePqUACqGhfPOL/G50m3pBzNUcX4Ku+paFwYCoD91bi8JXLMv6UbsXubo4rxQ1LwTdJsAdhfgxLjlyk+xrqkWyJ3c/SPKZ/RBgAgn8o6NmHXy9fl3Yi9UInrxahq3Jd0S+Q5i/d0GKRdA1DzNEd7OeTTua4BGPQ0R3s5ZE3dA7DS3Rzt5Yj6u4FSpUqVKpXMTf0NbGpejPaSapcAAAAASUVORK5CYII="/></defs></svg>
                            <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="25" height="19" fill="url(#pattern0_135_273)"/><defs><pattern id="pattern0_135_273" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_135_273" transform="matrix(0.015625 0 0 0.0205592 0 -0.315789)"/></pattern><image id="image0_135_273" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6ElEQVR4nO2baYgcRRTHGy+88PggXiheKGLwWgURNQGDEDGIYjNTbzaJBw5+8EKF9UBW1EA0RLOZVxVGJJGAKJuoSCAaEhVkEQmeiIIkQQQxEHTRiAqS5C9vtmV7aqt2e8eqGWftPxTsh/9S9X79ul71654kKVWqVGxVNM4gxibF2EcamG60PIy3agYXJHMo+J9nCnzKYIzL/yb9LmJsmnXwkxBGk36XKpD23ttB49ek30VWUKH9/3nRXAaQjuIIMjhHMa4hg5QMhojRJMY2xfhaMX7v+P6frAp/KcaPxPhE9gRirCCDutJYTAYDKePYeAGuwlESIBkslEllcqWxQQIkxm5i7P+3AQYZjHEBpDQ2ty6AXIiJCzJQbeC0jgFQrwMLNEoAnYr+7xlQqtSkSOM3SSfF+DPbdcez8iTVYLeUvaxUyW48llWKbdnOLOVrNKsgUiabSmOkVdImKstT2c49pDQeaFWciVK3NNvN06zsSTVamJXdgdYuz7hIKpXs9mRwooxl63FkElpKY2ev7+XCg/FdeACMD3seWPHxUXAAJGnc+8AKDaXxZnAASu7Z/rkFdHgAjMf7JgMYT4YHoHFHH2XA3cEBkMGiaSZ9hxiXVtbiLNJ4mhgHCyxyVXU1TpahNF6Y8apqHJAsXNLEmdUGrlAaH0zjXRwcQNXgMt+EEkQbLI29MwU0BfAsS1vrKdXjrWlcGRxAyjjFN2FlBOdawXwbGoDS+DTvH1yDS3zepWtxengAozjU9/wvKWkF83EEANvz/loDCzyZcrDexOHBAYhIY48n5W5IcmrtCeEBbLT8t3q8e5NYIsZnnkkreZ9ivBphD2ha/rs8vi+jAVCMLZ4F3mP5OAKAFZb/EWemMLZGA0CMdZ4FPtYGQOOZ4AAMhiz/cg+AV+IB0O5JSeN5C8BDEQDULb8pkilhATDu91B/2fLdHhpAjXFb3q8Yrzt9DTwYD4BB6gHwhgXg5ggArrcAbC2yIQdVzeBaD4D3LQDXBQfQwOUWgB3OtWjMjwZgkHGeZ9Iv2nwG80IDkOcMy7/L6Wvg/HgAVuIYTwZ8n/fJUTQ0gLSJ49v8nm8OaiM4LhqAfHPUArAvyanexNFBATD2Dw/jkH+88rfrWC7vIpPYUp7mqH3+bnWPAwFQGj/lvctexAke7674ANjdHE1HcFKR54YOAezMewfX4GyPbyw6API0R+3NhxjfBAPA2JH3SkUo8sAURcrTHK0ZXGX5xgJugu+2eeUFidvXiA+APc1Rg0UWgM0BAbxW6ECm8UR8ANrTHDUgy7chIABjAag7s5BxZ3QA5GmOKsa9bT7G6mAAGM/mvYrxqGcNN0YHUPU0R+1ePDGGAwJ42ALwnMsna4sOIPU0R6W1XeTJsRMAdmorjZecviZOjQ9g1N0cVRrrLQBLggFo4BYLwEbH/AfmD+Ow6AB8hxzFeDvJiRq4KSCABW1exnsO356kWyJHc1ROiHlPRePqUACqGhfPOL/G50m3pBzNUcX4Ku+paFwYCoD91bi8JXLMv6UbsXubo4rxQ1LwTdJsAdhfgxLjlyk+xrqkWyJ3c/SPKZ/RBgAgn8o6NmHXy9fl3Yi9UInrxahq3Jd0S+Q5i/d0GKRdA1DzNEd7OeTTua4BGPQ0R3s5ZE3dA7DS3Rzt5Yj6u4FSpUqVKpXMTf0NbGpejPaSapcAAAAASUVORK5CYII="/></defs></svg>
                        </button>
                        <div class="cart-add-price">
                            <div class="cart-add">
                                <svg width="16" height="3" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 1.5H15.5" stroke="#7C7C7C" stroke-width="2"/></svg>
                                <input type="number" min="1" max="100" value="1" class="product-count">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 7.5H15.5" stroke="#7C7C7C" stroke-width="2"/><path d="M8 0V15" stroke="#7C7C7C" stroke-width="2"/></svg>
                            </div>
                            <h2>${productItem.querySelector('h1').textContent}</h2>
                        </div>
                    </div>
                `
                productsInCart.insertBefore(cartItem, document.querySelector('.cart-total'));
                cartItem.classList.add('cart-item');
            }
        } catch {
            let productId = buttonList[i].id.split('-')[1];
            let cartDiv = document.querySelector('.cart-div');
            let productItem = buttonList[i].closest('li');
            cartDiv.innerHTML = `
                <div class="cart-header">
                    <h1>Кошик</h1>
                    <svg class="cancel-cart" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect class="cancel" width="30" height="30" fill="url(#pattern0_137_270_4)"/><defs><pattern id="pattern0_137_270_4" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_137_270" transform="scale(0.0104167)"/></pattern><image id="image0_137_270" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACqUlEQVR4nO2dQXITMRBFtYeww5wjhGPkBgkLWMHxHA4AVdZciKzDo6aYKaYMrtiZkbpb+u8ATvf741hSlHZKQgghhBBCCCGEEEKI2AA74Ba4SUEBbqYedikSwB3wyF++AVcpCMBr4GFR/9jLfYoA8Al44l8G4E1yDvAK+P6f+n8BX5NngM8n5IcIgdPy/YdwhnzXIfC8fL8hXCDfZQicL99fCC+Q7yoELpe/DOFLVPnLEK4CyrcPAfi4Uv5MtghhWmoeWM/o4K528e+O1vmhQmA7+TM/q27Wpt3h1uQaIRSQP3NbuvbjLTrRQqCc/JH3peo+1cw+UgiUlf+wdb01VhDVVkeRam2uMQLU2GyDOK5tUzw2isOaiuKpYRzVUhUPjeOgBlMsBdC7fEsRSL6dECTf7p2A5JseARwKvrbJMXkRCj+lfX/gNhjC0Jz8QCEMzcoPEMLQvHzHIQzdyHcYQu5OvqMQcrfyHYSQu5dvGILkG4aQ9eTbhZAl3zaAQQHYyZ9RCIbyZxSCofwZhYD9RqzfEBzI7zcER/L7C8Gh/H5CcCy//RACyG83hEDy2wthursznsFEu5ZyGK/UpMgUfvKzLmYZy091fla8X0c15c8ohDoisq6nO5Wfen8nTI3/8PCXLHoLwZP87kLwKL+bEDzLbz6ECPKbDmGaBRrmCICy/6mz37re55r5EPH8hVbG1RQa2HSocfjVysCm3TSmK+TJI9FHli3mQz9FPfZl26F9997mRIe4q8k2YyttB7iuCCGbb2TWD251Mz330hBcyF85uth2au6KEFzJf+Hwbl/yLwjBpfwLx9f7lH/GPGnX8s/8Agff8mfGZdnRaON9pBsG/FmiLueiPlafD73hl/hcp6AA11MPb61rEUIIIYQQQgghhBBCpHX8BouW3a92uMn6AAAAAElFTkSuQmCC"/></defs></svg>
                </div>
                <div class="cart-item">
                    <input class="button-add" type="checkbox" name="" id="" checked>
                    <div class="image-handler">
                        <img src="${productItem.querySelector('img').src}" alt="">
                    </div>
                    <p class="cart-item-description">${productItem.querySelector('h2').textContent}</p>
                    <div class="cart-item-interaction">
                        <button class="delete-cart-item" id="product-${productId}">
                            <svg class="basket-cover" width="25" height="6" viewBox="0 0 25 6" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="25" height="6" fill="url(#pattern0_135_271)"/><defs><pattern id="pattern0_135_271" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_135_271" transform="scale(0.015625 0.0651042)"/></pattern><image id="image0_135_271" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6ElEQVR4nO2baYgcRRTHGy+88PggXiheKGLwWgURNQGDEDGIYjNTbzaJBw5+8EKF9UBW1EA0RLOZVxVGJJGAKJuoSCAaEhVkEQmeiIIkQQQxEHTRiAqS5C9vtmV7aqt2e8eqGWftPxTsh/9S9X79ul71654kKVWqVGxVNM4gxibF2EcamG60PIy3agYXJHMo+J9nCnzKYIzL/yb9LmJsmnXwkxBGk36XKpD23ttB49ek30VWUKH9/3nRXAaQjuIIMjhHMa4hg5QMhojRJMY2xfhaMX7v+P6frAp/KcaPxPhE9gRirCCDutJYTAYDKePYeAGuwlESIBkslEllcqWxQQIkxm5i7P+3AQYZjHEBpDQ2ty6AXIiJCzJQbeC0jgFQrwMLNEoAnYr+7xlQqtSkSOM3SSfF+DPbdcez8iTVYLeUvaxUyW48llWKbdnOLOVrNKsgUiabSmOkVdImKstT2c49pDQeaFWciVK3NNvN06zsSTVamJXdgdYuz7hIKpXs9mRwooxl63FkElpKY2ev7+XCg/FdeACMD3seWPHxUXAAJGnc+8AKDaXxZnAASu7Z/rkFdHgAjMf7JgMYT4YHoHFHH2XA3cEBkMGiaSZ9hxiXVtbiLNJ4mhgHCyxyVXU1TpahNF6Y8apqHJAsXNLEmdUGrlAaH0zjXRwcQNXgMt+EEkQbLI29MwU0BfAsS1vrKdXjrWlcGRxAyjjFN2FlBOdawXwbGoDS+DTvH1yDS3zepWtxengAozjU9/wvKWkF83EEANvz/loDCzyZcrDexOHBAYhIY48n5W5IcmrtCeEBbLT8t3q8e5NYIsZnnkkreZ9ivBphD2ha/rs8vi+jAVCMLZ4F3mP5OAKAFZb/EWemMLZGA0CMdZ4FPtYGQOOZ4AAMhiz/cg+AV+IB0O5JSeN5C8BDEQDULb8pkilhATDu91B/2fLdHhpAjXFb3q8Yrzt9DTwYD4BB6gHwhgXg5ggArrcAbC2yIQdVzeBaD4D3LQDXBQfQwOUWgB3OtWjMjwZgkHGeZ9Iv2nwG80IDkOcMy7/L6Wvg/HgAVuIYTwZ8n/fJUTQ0gLSJ49v8nm8OaiM4LhqAfHPUArAvyanexNFBATD2Dw/jkH+88rfrWC7vIpPYUp7mqH3+bnWPAwFQGj/lvctexAke7674ANjdHE1HcFKR54YOAezMewfX4GyPbyw6API0R+3NhxjfBAPA2JH3SkUo8sAURcrTHK0ZXGX5xgJugu+2eeUFidvXiA+APc1Rg0UWgM0BAbxW6ECm8UR8ANrTHDUgy7chIABjAag7s5BxZ3QA5GmOKsa9bT7G6mAAGM/mvYrxqGcNN0YHUPU0R+1ePDGGAwJ42ALwnMsna4sOIPU0R6W1XeTJsRMAdmorjZecviZOjQ9g1N0cVRrrLQBLggFo4BYLwEbH/AfmD+Ow6AB8hxzFeDvJiRq4KSCABW1exnsO356kWyJHc1ROiHlPRePqUACqGhfPOL/G50m3pBzNUcX4Ku+paFwYCoD91bi8JXLMv6UbsXubo4rxQ1LwTdJsAdhfgxLjlyk+xrqkWyJ3c/SPKZ/RBgAgn8o6NmHXy9fl3Yi9UInrxahq3Jd0S+Q5i/d0GKRdA1DzNEd7OeTTua4BGPQ0R3s5ZE3dA7DS3Rzt5Yj6u4FSpUqVKpXMTf0NbGpejPaSapcAAAAASUVORK5CYII="/></defs></svg>
                            <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="25" height="19" fill="url(#pattern0_135_273)"/><defs><pattern id="pattern0_135_273" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_135_273" transform="matrix(0.015625 0 0 0.0205592 0 -0.315789)"/></pattern><image id="image0_135_273" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6ElEQVR4nO2baYgcRRTHGy+88PggXiheKGLwWgURNQGDEDGIYjNTbzaJBw5+8EKF9UBW1EA0RLOZVxVGJJGAKJuoSCAaEhVkEQmeiIIkQQQxEHTRiAqS5C9vtmV7aqt2e8eqGWftPxTsh/9S9X79ul71654kKVWqVGxVNM4gxibF2EcamG60PIy3agYXJHMo+J9nCnzKYIzL/yb9LmJsmnXwkxBGk36XKpD23ttB49ek30VWUKH9/3nRXAaQjuIIMjhHMa4hg5QMhojRJMY2xfhaMX7v+P6frAp/KcaPxPhE9gRirCCDutJYTAYDKePYeAGuwlESIBkslEllcqWxQQIkxm5i7P+3AQYZjHEBpDQ2ty6AXIiJCzJQbeC0jgFQrwMLNEoAnYr+7xlQqtSkSOM3SSfF+DPbdcez8iTVYLeUvaxUyW48llWKbdnOLOVrNKsgUiabSmOkVdImKstT2c49pDQeaFWciVK3NNvN06zsSTVamJXdgdYuz7hIKpXs9mRwooxl63FkElpKY2ev7+XCg/FdeACMD3seWPHxUXAAJGnc+8AKDaXxZnAASu7Z/rkFdHgAjMf7JgMYT4YHoHFHH2XA3cEBkMGiaSZ9hxiXVtbiLNJ4mhgHCyxyVXU1TpahNF6Y8apqHJAsXNLEmdUGrlAaH0zjXRwcQNXgMt+EEkQbLI29MwU0BfAsS1vrKdXjrWlcGRxAyjjFN2FlBOdawXwbGoDS+DTvH1yDS3zepWtxengAozjU9/wvKWkF83EEANvz/loDCzyZcrDexOHBAYhIY48n5W5IcmrtCeEBbLT8t3q8e5NYIsZnnkkreZ9ivBphD2ha/rs8vi+jAVCMLZ4F3mP5OAKAFZb/EWemMLZGA0CMdZ4FPtYGQOOZ4AAMhiz/cg+AV+IB0O5JSeN5C8BDEQDULb8pkilhATDu91B/2fLdHhpAjXFb3q8Yrzt9DTwYD4BB6gHwhgXg5ggArrcAbC2yIQdVzeBaD4D3LQDXBQfQwOUWgB3OtWjMjwZgkHGeZ9Iv2nwG80IDkOcMy7/L6Wvg/HgAVuIYTwZ8n/fJUTQ0gLSJ49v8nm8OaiM4LhqAfHPUArAvyanexNFBATD2Dw/jkH+88rfrWC7vIpPYUp7mqH3+bnWPAwFQGj/lvctexAke7674ANjdHE1HcFKR54YOAezMewfX4GyPbyw6API0R+3NhxjfBAPA2JH3SkUo8sAURcrTHK0ZXGX5xgJugu+2eeUFidvXiA+APc1Rg0UWgM0BAbxW6ECm8UR8ANrTHDUgy7chIABjAag7s5BxZ3QA5GmOKsa9bT7G6mAAGM/mvYrxqGcNN0YHUPU0R+1ePDGGAwJ42ALwnMsna4sOIPU0R6W1XeTJsRMAdmorjZecviZOjQ9g1N0cVRrrLQBLggFo4BYLwEbH/AfmD+Ow6AB8hxzFeDvJiRq4KSCABW1exnsO356kWyJHc1ROiHlPRePqUACqGhfPOL/G50m3pBzNUcX4Ku+paFwYCoD91bi8JXLMv6UbsXubo4rxQ1LwTdJsAdhfgxLjlyk+xrqkWyJ3c/SPKZ/RBgAgn8o6NmHXy9fl3Yi9UInrxahq3Jd0S+Q5i/d0GKRdA1DzNEd7OeTTua4BGPQ0R3s5ZE3dA7DS3Rzt5Yj6u4FSpUqVKpXMTf0NbGpejPaSapcAAAAASUVORK5CYII="/></defs></svg>
                        </button>
                        <div class="cart-add-price">
                            <div class="cart-add">
                                <svg width="16" height="3" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 1.5H15.5" stroke="#7C7C7C" stroke-width="2"/></svg>
                                <input type="number" min="1" max="100" value="1">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 7.5H15.5" stroke="#7C7C7C" stroke-width="2"/><path d="M8 0V15" stroke="#7C7C7C" stroke-width="2"/></svg>
                            </div>
                            <h2>${productItem.querySelector('h1').textContent}</h2>
                        </div>
                    </div>
                </div>
                <div class="cart-total">
                    <h1>${productItem.querySelector('h1').textContent} ₴</h1>
                    <form action="/order_processing" method="post">
                        <button class="process-order-button">Оформити замовлення</button>
                    </form>
                </div>
            `
        } finally {
            let productId = buttonList[i].id.split('-')[1];
            if (document.cookie.includes('product')){
                let currentProducts = document.cookie.split('=')[1]
                if (currentProducts && currentProducts.trim()) {
                    document.cookie = `product = ${currentProducts},${productId}; path=/`;
                } else {
                    document.cookie = `product = ${productId}; path=/`;
                }
            }
            else {
                document.cookie = `product = ${productId}; path=/`
            }
        }
    })
}

let plusButtonList = document.querySelectorAll('.plus-button')
plusButtonList.forEach(plusButton => {
    plusButton.addEventListener('click', () => {
        let priceItem = plusButton.closest('.cart-add-price').querySelector('h2')
        let productCount = plusButton.previousElementSibling
        productCount.value = Number(productCount.value) + 1;
        changeTotalPrice(priceItem)

        let productId = plusButton.closest('.cart-item').classList[1].split('-')[1]
        let currentProducts = document.cookie.split('=')[1]
        document.cookie = `product = ${currentProducts},${productId}; path=/`;
    })
})

let minusButtonList = document.querySelectorAll('.minus-button')
minusButtonList.forEach(minusButton => {
    minusButton.addEventListener('click', () => {
        let priceItem = minusButton.closest('.cart-add-price').querySelector('h2')
        let productCount = minusButton.nextElementSibling
        if (productCount.value > 1){
            productCount.value = Number(productCount.value) - 1;
            changeTotalPrice(priceItem, change = -1)
            let productId = minusButton.closest('.cart-item').classList[1].split('-')[1]
            let currentProducts = document.cookie.split('=')[1].split(',')
            let indexElem = currentProducts.indexOf(productId)
            currentProducts.splice(indexElem, 1)
            document.cookie = `product = ${currentProducts.join(',')}; path=/`
        }
    })
})

let buttonDeleteProduct = document.querySelectorAll('.delete-cart-item');
buttonDeleteProduct.forEach(button => {
    button.addEventListener('click', (event) => {
        let cartItem = button.closest('.cart-item');
        let countProduct = cartItem.querySelector('.product-count').value;
        changeTotalPrice(cartItem.querySelector('h2'), change = -countProduct)
        cartItem.remove();

        let productId = button.id.split('-')[1];
        let currentProducts = document.cookie.split('=')[1].split(',')
        currentProducts = currentProducts.filter(product => product !== productId);
        document.cookie = `product = ${currentProducts.join(',')}; path=/`
        if (currentProducts.length == 0){
            let cartDiv = document.querySelector('.cart-div');
            cartDiv.innerHTML = `
                <div class="cart-header">
                    <h1>Кошик</h1>
                    <svg class="cancel-cart" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect class="cancel" width="30" height="30" fill="url(#pattern0_137_270_4)"/><defs><pattern id="pattern0_137_270_4" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_137_270" transform="scale(0.0104167)"/></pattern><image id="image0_137_270" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACqUlEQVR4nO2dQXITMRBFtYeww5wjhGPkBgkLWMHxHA4AVdZciKzDo6aYKaYMrtiZkbpb+u8ATvf741hSlHZKQgghhBBCCCGEEEKI2AA74Ba4SUEBbqYedikSwB3wyF++AVcpCMBr4GFR/9jLfYoA8Al44l8G4E1yDvAK+P6f+n8BX5NngM8n5IcIgdPy/YdwhnzXIfC8fL8hXCDfZQicL99fCC+Q7yoELpe/DOFLVPnLEK4CyrcPAfi4Uv5MtghhWmoeWM/o4K528e+O1vmhQmA7+TM/q27Wpt3h1uQaIRSQP3NbuvbjLTrRQqCc/JH3peo+1cw+UgiUlf+wdb01VhDVVkeRam2uMQLU2GyDOK5tUzw2isOaiuKpYRzVUhUPjeOgBlMsBdC7fEsRSL6dECTf7p2A5JseARwKvrbJMXkRCj+lfX/gNhjC0Jz8QCEMzcoPEMLQvHzHIQzdyHcYQu5OvqMQcrfyHYSQu5dvGILkG4aQ9eTbhZAl3zaAQQHYyZ9RCIbyZxSCofwZhYD9RqzfEBzI7zcER/L7C8Gh/H5CcCy//RACyG83hEDy2wthursznsFEu5ZyGK/UpMgUfvKzLmYZy091fla8X0c15c8ohDoisq6nO5Wfen8nTI3/8PCXLHoLwZP87kLwKL+bEDzLbz6ECPKbDmGaBRrmCICy/6mz37re55r5EPH8hVbG1RQa2HSocfjVysCm3TSmK+TJI9FHli3mQz9FPfZl26F9997mRIe4q8k2YyttB7iuCCGbb2TWD251Mz330hBcyF85uth2au6KEFzJf+Hwbl/yLwjBpfwLx9f7lH/GPGnX8s/8Agff8mfGZdnRaON9pBsG/FmiLueiPlafD73hl/hcp6AA11MPb61rEUIIIYQQQgghhBBCpHX8BouW3a92uMn6AAAAAElFTkSuQmCC"/></defs></svg>
                </div>
                <div id="empty-cart-id"><img src="/home/img/empty_cart.png"></div>
                <h1 class="empty-cart-text">Кошик порожній</h1>
            `
        }
    })
})