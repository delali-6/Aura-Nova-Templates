const dockLinks = [...document.querySelectorAll('.dock-nav a')];
const sections = [...document.querySelectorAll('.snap-section')];
const revealItems = document.querySelectorAll('.rise');
const landingImage = document.querySelector('.landing > img');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.getAttribute('id');
      dockLinks.forEach((link) => {
        link.classList.toggle('active', link.dataset.target === id);
      });
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => sectionObserver.observe(section));

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

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener('scroll', () => {
  if (!landingImage) {
    return;
  }

  const offset = Math.min(window.scrollY * 0.09, 65);
  landingImage.style.transform = `scale(1.04) translateY(${offset}px)`;
});
