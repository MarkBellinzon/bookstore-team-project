function onLoad() {
  document.body.classList.add('loader-hide');
  window.setTimeout(function () {
    document.body.classList.add('full-load');
    document.body.classList.remove('loader-hide');
  }, 1000);
}

window.addEventListener('load', onLoad);