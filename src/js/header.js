document.addEventListener("DOMContentLoaded", function () {
  const burgerToggle = document.querySelector('#burger-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  navToggle.addEventListener('click', () => {
    burgerToggle.checked = !burgerToggle.checked;

  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
}
      if (burgerToggle.checked) {
        burgerToggle.checked = false;
      }
    });
  });
});

