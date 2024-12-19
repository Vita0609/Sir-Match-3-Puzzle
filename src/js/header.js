const burgerToggle = document.querySelector('#burger-toggle');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  burgerToggle.checked = !burgerToggle.checked;
});