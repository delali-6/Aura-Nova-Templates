const menuBtn = document.querySelector('.menu-btn');
const topNav = document.querySelector('.top-nav');
const reveals = document.querySelectorAll('.reveal');
const heroImage = document.querySelector('.hero img');
const filters = [...document.querySelectorAll('.filter')];
const products = [...document.querySelectorAll('.product')];

if (menuBtn && topNav) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    topNav.classList.toggle('open');
  });

  topNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      topNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((item) => revealObserver.observe(item));

window.addEventListener('scroll', () => {
  if (!heroImage) {
    return;
  }

  const shift = Math.min(window.scrollY * 0.12, 70);
  heroImage.style.transform = `scale(1.05) translateY(${shift}px)`;
});

filters.forEach((filterBtn) => {
  filterBtn.addEventListener('click', () => {
    filters.forEach((btn) => btn.classList.remove('active'));
    filterBtn.classList.add('active');

    const selected = filterBtn.dataset.filter;
    products.forEach((product) => {
      const kind = product.dataset.kind;
      const visible = selected === 'all' || selected === kind;
      product.classList.toggle('hide', !visible);
    });
  });
});
