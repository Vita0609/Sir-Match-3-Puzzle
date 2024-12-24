import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Инициализация аккордеона
document.addEventListener('DOMContentLoaded', () => {
  const acc = new Accordion('.accordion-container', {
    duration: 300, // Скорость анимации
    showMultiple: false, // Разрешить только одну открытую панель
    openOnInit: [0], // Открыть первый элемент при загрузке
  });
});
