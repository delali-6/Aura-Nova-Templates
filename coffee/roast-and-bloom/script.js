const sections = [...document.querySelectorAll('.panel')];
const navLinks = [...document.querySelectorAll('.rail-nav a')];
const progressFill = document.querySelector('.progress-fill');
const revealItems = document.querySelectorAll('.slide-up');
const chips = [...document.querySelectorAll('.chip')];
const cards = [...document.querySelectorAll('.flight-card')];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
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
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

  if (progressFill) {
    progressFill.style.width = `${Math.min(progress, 100)}%`;
  }
});

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');

    const filter = chip.dataset.filter;
    cards.forEach((card) => {
      const kind = card.dataset.kind;
      const visible = filter === 'all' || kind === filter;
      card.classList.toggle('hide', !visible);
    });
  });
});
