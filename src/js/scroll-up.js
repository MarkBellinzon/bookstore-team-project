const scrollUpButton = document.querySelector('.scroll-up');
const scrollUpArea = document.documentElement.scrollHeight;

function show() {
  scrollUpButton.classList.remove('scroll-hide');
}

function hide() {
  scrollUpButton.classList.add('scroll-hide');
}

function scrollEventListener() {
  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 0.5 * scrollUpArea && window.innerWidth >= 768) {
      show();
    } else {
      hide();
    }
  });

  scrollUpButton.onclick = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
}

scrollEventListener();
