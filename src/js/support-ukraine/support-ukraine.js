import { supportUrlArray } from './support-url.js';
import Swiper from 'swiper';
console.log(supportUrlArray);
// Отримання елемента .swiper-wrapper
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Додавання слайдів до .swiper-wrapper
supportUrlArray.forEach((item, index) => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');

  // if (index >= 6) {
  //   slide.classList.add('hidden-slide');
  // }

  const image = document.createElement('img');
  image.src = item.img;
  image.alt = item.title;

  // Додано обробник події для зображення
  image.addEventListener('click', () => {
    console.log('Image clicked:', item.url);
    window.open(item.url, '_blank'); // відкриття посилання в новій вкладці
  });

  slide.appendChild(image);

  const slideNumber = document.createElement('div');
  slideNumber.classList.add('slide-number');
  slideNumber.textContent = `0 ${index + 1}`;
  slide.appendChild(slideNumber);

  swiperWrapper.appendChild(slide);
});

// mySwiper.updateSize();

// Отримання скритих слайдів та кнопок
const hiddenSlides = document.querySelectorAll('.swiper-slide.hidden-slide');
const showButton = document.querySelector('.show-button');
const hideButton = document.querySelector('.hide-button');
const swiperContainer = document.querySelector('.swiper-container');

// Додаємо обробники подій для кнопок
showButton.addEventListener('click', toggleSlidesVisibility);
hideButton.addEventListener('click', toggleSlidesVisibility);

// Функція для зміни видимості слайдів та кнопок
function toggleSlidesVisibility() {
  swiperContainer.classList.toggle('hide');

  showButton.style.display =
    showButton.style.display === 'none' ? 'block' : 'none';
  hideButton.style.display =
    hideButton.style.display === 'none' ? 'block' : 'none';
}

// Ініціалізація Swiper
const mySwiper = new Swiper('.swiper-wrapper', {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: false,
  pagination: {
    el: '.swiper-slide',
    clickable: true,
  },
});
