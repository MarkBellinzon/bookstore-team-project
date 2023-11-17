const refs = {
  openBurgerBtn: document.querySelector('.js-open-menu'),
  closeBurgerBtn: document.querySelector('.js-close-menu'),
  burger: document.querySelector('.mobile-menu-container'),
};

refs.openBurgerBtn.addEventListener('click', toggleModal);
refs.closeBurgerBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.burger.classList.toggle('is-hidden');
}
