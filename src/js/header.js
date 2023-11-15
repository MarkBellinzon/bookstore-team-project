const openBurgerBtn = document.querySelector('.js-open-menu');
const closeBurgerBtn = document.querySelector('.js-close-btn');
const mobContainer = document.querySelector('.js-mob-menu');

openBurgerBtn.addEventListener('click', toggleModal);
closeBurgerBtn.addEventListener('click', toggleModal);

function toggleModal() {
  mobContainer.classList.toggle('is-hidden');
}
