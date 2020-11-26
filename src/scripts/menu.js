const menu = document.querySelector('.menu');
const button = document.querySelector('.burger-button');

button.addEventListener('click', () => {
    menu.classList.toggle('burger');
    button.classList.toggle('close');
});