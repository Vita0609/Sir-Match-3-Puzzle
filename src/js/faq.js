import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const acc = new Accordion('.accordion-container');

// // Импорт библиотеки и стилей
// document.addEventListener('DOMContentLoaded', () => {
//   // Найти все элементы аккордеона
//   const accordions = document.querySelectorAll('.ac');

//   // Пройтись по каждому элементу
//   accordions.forEach((accordion) => {
//     const trigger = accordion.querySelector('.ac-trigger'); // Кнопка
//     const panel = accordion.querySelector('.ac-panel'); // Контейнер с текстом

//     // Убедиться, что элементы найдены
//     if (trigger && panel) {
//       // Скрыть все панели изначально
//       panel.style.display = 'none';

//       // Добавить обработчик события на клик
//       trigger.addEventListener('click', () => {
//         const isActive = accordion.classList.contains('is-active');

//         // Закрыть все открытые панели
//         accordions.forEach((item) => {
//           item.classList.remove('is-active');
//           const itemPanel = item.querySelector('.ac-panel');
//           const itemTrigger = item.querySelector('.ac-trigger');
//           if (itemPanel) {
//             itemPanel.style.display = 'none';
//           }
//           if (itemTrigger) {
//             itemTrigger.classList.remove('rotated'); // Убрать поворот стрелки
//           }
//         });

//         // Открыть текущую панель, если она была закрыта
//         if (!isActive) {
//           accordion.classList.add('is-active');
//           panel.style.display = 'block';
//           trigger.classList.add('rotated'); // Добавить класс для поворота стрелки
//         }
//       });
//     }
//   });
// });
