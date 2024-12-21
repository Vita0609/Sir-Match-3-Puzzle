// const burgerToggle = document.querySelector('#burger-toggle');
// const navToggle = document.querySelector('.nav-toggle');

// navToggle.addEventListener('click', () => {
//   burgerToggle.checked = !burgerToggle.checked;
// });



// const menuToggle = document.getElementById('menu-toggle');
// const navMenu = document.getElementById('nav-menu');

// menuToggle.addEventListener('click', () => {
//   navMenu.classList.toggle('active');
// });


document.addEventListener("DOMContentLoaded", function() {
  const burgerToggle = document.getElementById('burger-toggle');
  const navList = document.querySelector('.nav-list');

  // Переключение видимости списка при изменении состояния чекбокса
  burgerToggle.addEventListener('change', function() {
    if (burgerToggle.checked) {
      navList.style.display = 'flex';  // Показываем меню
    } else {
      navList.style.display = 'none';  // Скрываем меню
    }
  });

  // Плавный скроллинг к секциям
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Отменяем стандартный переход

      // Получаем ID секции
      const targetId = this.getAttribute('href').substring(1);  // Убираем '#'
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Прокручиваем к секции с плавным эффектом
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      // Закрываем меню после клика на мобильных устройствах
      if (burgerToggle.checked) {
        burgerToggle.checked = false;  // Скрываем меню
      }
    });
  });
});
