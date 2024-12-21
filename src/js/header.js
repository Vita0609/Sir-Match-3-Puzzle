// const burgerToggle = document.querySelector('#burger-toggle');
// const navToggle = document.querySelector('.nav-toggle');

// navToggle.addEventListener('click', () => {
//   burgerToggle.checked = !burgerToggle.checked;
// });



document.addEventListener("DOMContentLoaded", function () {
  const burgerToggle = document.querySelector('#burger-toggle'); // Чекбокс для управления меню
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list'); // Кнопка для бургер-меню

  // Когда кликаем на кнопку бургер-меню, переключаем состояние чекбокса
  navToggle.addEventListener('click', () => {
    burgerToggle.checked = !burgerToggle.checked;
    burgerToggle.checked ? navList.classList.add('nav-open') : navList.classList.remove('nav-open');// Переключаем состояние чекбокса
  });

  // Плавный переход между секциями
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Отменяем стандартный переход

      // Получаем ID секции и прокручиваем к ней
      const targetId = this.getAttribute('href').substring(1); // Убираем символ #
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Прокручиваем к секции
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      // Закрываем бургер-меню после клика на мобильных устройствах
      if (burgerToggle.checked) {
        burgerToggle.checked = false; // Скрываем меню
      }
    });
  });
});
