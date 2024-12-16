const searchInput = document.querySelector('.search-form__input');
const overlay = document.querySelector('.overlay');

searchInput.addEventListener('focus', () => {
    overlay.style.display = 'block';
});

searchInput.addEventListener('blur', () => {
    overlay.style.display = 'none';
});