let addToCartButton = document.querySelector('.add-to-cart-button');

addToCartButton.addEventListener('click', () => {
    let productId = addToCartButton.id.split('-')[1];
    if (document.cookie.includes('product')){
        let currentProducts = document.cookie.split('=')[1];
        if (currentProducts && currentProducts.trim()) {
            document.cookie = `product = ${currentProducts},${productId}; path=/`;
        } else {
            document.cookie = `product = ${productId}; path=/`;
        }
    }
    else {
        document.cookie = `product = ${productId}; path=/`;
    }
    location.reload();
});