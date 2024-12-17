const searchInput = document.querySelector('.search-form__input');
const overlay = document.querySelector('.overlay');

searchInput.addEventListener('focus', () => {
    overlay.style.display = 'block';
});

searchInput.addEventListener('blur', () => {
    overlay.style.display = 'none';
});

const passwordInput = document.getElementById('password');

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

const buttonUser = document.getElementById('button-user');
const overlayReg = document.querySelector('.overlay-reg');

buttonUser.addEventListener('click', () => {
    overlayReg.style.display = 'flex';
});
overlayReg.addEventListener('click', (e) => {
    if (e.target === overlayReg) {
        overlayReg.style.display = 'none';
    }
});

const regLinkReg = document.querySelector('.reg-link-reg');
const regLinkAuth = document.querySelector('.reg-link-auth');
const auth = document.querySelector('.auth');
const reg = document.querySelector('.reg');

regLinkReg.addEventListener('click', () => {
    if (reg.style.display === 'none') {
        reg.style.display = 'flex';
        auth.style.display = 'none';
    }
    else {
        reg.style.display = 'none';
        auth.style.display = 'flex';
    }
});
regLinkAuth.addEventListener('click', () => {
    if (reg.style.display === 'none') {
        reg.style.display = 'flex';
        auth.style.display = 'none';
    }
    else {
        reg.style.display = 'none';
        auth.style.display = 'flex';
    }
});