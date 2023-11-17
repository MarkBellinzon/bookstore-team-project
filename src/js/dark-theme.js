// dark theme style 1

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
// const body = document.querySelector('body');
// const checkboxTheme = document.querySelector('.js-switch-theme');
// // console.log(checkboxTheme)
// checkboxTheme.addEventListener('click', onClickTheme);
// function onClickTheme(event) {
//   //   console.log(event.currentTarget.checked);
//   if (!event.currentTarget.checked) {
//     body.classList.remove('dark-theme');
//     localStorage.setItem('saveTheme', Theme.LIGHT);
//     checkboxTheme.checked = false;
//   } else {
//     body.classList.add('dark-theme');
//     localStorage.setItem('saveTheme', Theme.DARK);
//     checkboxTheme.checked = true ;
//   }
// }
// const saveTheme = localStorage.getItem('saveTheme');
// if (saveTheme === Theme.LIGHT) {
//   body.classList.remove('dark-theme');
//   checkboxTheme.checked = false;
// } else {
//   body.classList.add('dark-theme');
//   checkboxTheme.checked = true;
// }

// dark theme style 2
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const toggleSwitches = document.querySelectorAll(
    '.common-toggle input[type="checkbox"]'
  );
  toggleSwitches.forEach(function (toggleSwitch) {
    if (theme === 'dark') {
      toggleSwitch.checked = true;
    } else {
      toggleSwitch.checked = false;
    }
  });
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  setTheme(currentTheme);
} else {
  setTheme('light');
}

const toggleSwitches = document.querySelectorAll(
  '.common-toggle input[type="checkbox"]'
);
toggleSwitches.forEach(function (toggleSwitch) {
  toggleSwitch.addEventListener(
    'change',
    function (e) {
      if (e.target.checked) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    },
    false
  );
});
