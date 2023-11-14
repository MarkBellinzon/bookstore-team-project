import { supportUrlArray } from './support-url.js';
import Swiper from 'swiper';

// Ініціалізація Swiper
const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Отр. елемента .swiper-wrapper
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Додавання слайдів до .swiper-wrapper
supportUrlArray.forEach((item, index) => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');

  if (index >= 6) {
    slide.classList.add('hidden-slide');
  }

  const image = document.createElement('img');
  image.src = item.img;
  image.alt = item.title;

  slide.appendChild(image);

  const slideNumber = document.createElement('div');
  slideNumber.classList.add('slide-number');
  slideNumber.textContent = `0 ${index + 1}`;
  slide.appendChild(slideNumber);

  swiperWrapper.appendChild(slide);
});

mySwiper.update();

// Отримання прихованих слайдів та кнопок
const hiddenSlides = document.querySelectorAll('.swiper-slide.hidden-slide');
const showButton = document.querySelector('.show-button');
const hideButton = document.querySelector('.hide-button');

// Додаємо обробники подій для кнопок
showButton.addEventListener('click', toggleSlidesVisibility);
hideButton.addEventListener('click', toggleSlidesVisibility);

// Функція для зміни видимості слайдів та кнопок
function toggleSlidesVisibility() {
  hiddenSlides.forEach(slide => {
    slide.classList.toggle('hidden-slide');
  });

  mySwiper.update(); // Оновлюємо Swiper після зміни слайдів

  showButton.style.display = showButton.style.display === 'none' ? 'block' : 'none';
  hideButton.style.display = hideButton.style.display === 'none' ? 'block' : 'none';
}

const slides = document.querySelectorAll('.swiper-slide');

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    const currentItem = supportUrlArray[index];
    window.location.href = currentItem.url;
  });
});

image.addEventListener('click', () => {
  console.log('Image clicked:', item.url);
  // або debugger;
  window.location.href = item.url;
});