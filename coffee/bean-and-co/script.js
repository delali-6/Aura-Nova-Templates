const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const revealElements = document.querySelectorAll('.reveal');
const heroImage = document.querySelector('.hero-image');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((el) => observer.observe(el));

window.addEventListener('scroll', () => {
  if (!heroImage) {
    return;
  }

  const offset = Math.min(window.scrollY * 0.12, 70);
  heroImage.style.transform = `scale(1.05) translateY(${offset}px)`;
});
