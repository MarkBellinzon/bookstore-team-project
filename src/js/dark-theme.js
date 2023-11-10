// dark theme style 1

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const checkboxTheme = document.querySelector('.js-switch-theme');
// console.log(checkboxTheme)
checkboxTheme.addEventListener('click', onClickTheme);
function onClickTheme(event) {
  //   console.log(event.currentTarget.checked);
  if (!event.currentTarget.checked) {
    body.classList.remove('dark-theme');
    localStorage.setItem('saveTheme', Theme.LIGHT);
    checkboxTheme.checked = false;
  } else {
    body.classList.add('dark-theme');
    localStorage.setItem('saveTheme', Theme.DARK);
    checkboxTheme.checked = true;
  }
}
const saveTheme = localStorage.getItem('saveTheme');
if (saveTheme === Theme.LIGHT) {
  body.classList.remove('dark-theme');
  checkboxTheme.checked = false;
} else {
  body.classList.add('dark-theme');
  checkboxTheme.checked = true;
}
