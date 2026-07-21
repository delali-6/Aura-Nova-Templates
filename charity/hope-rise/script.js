const reveals = document.querySelectorAll('.reveal');
const tabButtons = [...document.querySelectorAll('.tab-btn')];
const activityCards = [...document.querySelectorAll('.activity-card')];

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.18 }
);

reveals.forEach((item) => revealObserver.observe(item));

if (tabButtons.length && activityCards.length) {
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;
      activityCards.forEach((card) => {
        const kind = card.dataset.kind;
        const visible = filter === 'all' || filter === kind;
        card.style.display = visible ? '' : 'none';
      });
    });
  });
}
