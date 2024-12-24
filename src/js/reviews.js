import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
