const supOrgs = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: new URL('../img/support/savechld.png', import.meta.url).href,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: new URL('../img/support/2.svg', import.meta.url).href,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: new URL('../img/support/3.svg', import.meta.url).href,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: new URL('../img/support/4.svg', import.meta.url).href,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: new URL('../img/support/5.svg', import.meta.url).href,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: new URL('../img/support/6.svg', import.meta.url).href,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: new URL('../img/support/7.svg', import.meta.url).href,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: new URL('../img/support/8.svg', import.meta.url).href,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: new URL('../img/support/9.svg', import.meta.url).href,
  },
];

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  navigation: {
    nextEl: '.show-button',
    prevEl: '.hide-button',
  },
  loop: false,
});

const showMoreButton = document.querySelector('.show-button');
const hideButton = document.querySelector('.hide-button');

showMoreButton.addEventListener('click', () => mySwiper.slideNext());
hideButton.addEventListener('click', () => mySwiper.slidePrev());
