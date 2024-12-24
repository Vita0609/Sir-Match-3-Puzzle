import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// const acc = new Accordion('.accordion-container');

// document.addEventListener("DOMContentLoaded", () => {
//   // Находим все кнопки-триггеры
//   const triggers = document.querySelectorAll(".ac-trigger");

//   triggers.forEach((trigger) => {
//     trigger.addEventListener("click", (event) => {
//       const currentTrigger = event.currentTarget;
//       const parent = currentTrigger.closest(".ac"); // Родительский элемент с классом .ac
//       const panel = parent.querySelector(".ac-panel"); // Панель, которая должна раскрываться

//       // Проверяем, открыт ли уже текущий элемент
//       const isActive = parent.classList.contains("is-active");

//       // Закрываем все активные панели
//       const allPanels = document.querySelectorAll(".ac.is-active");
//       allPanels.forEach((activeItem) => {
//         activeItem.classList.remove("is-active");
//         const activePanel = activeItem.querySelector(".ac-panel");
//         activePanel.style.maxHeight = null; // Убираем высоту для скрытия
//       });

//       // Если текущая панель не была активна — открываем её
//       if (!isActive) {
//         parent.classList.add("is-active");
//         panel.style.maxHeight = panel.scrollHeight + "px"; // Устанавливаем высоту по содержимому
//       }
//     });
//   });
// });
// script.js
// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// Инициализация аккордеона
document.addEventListener("DOMContentLoaded", () => {
  const acc = new Accordion('.accordion-container', {
    duration: 300, // Скорость анимации
    showMultiple: false, // Разрешить только одну открытую панель
    openOnInit: [0], // Открыть первый элемент при загрузке
  });
});
