// CloudFlow Landing - Main JS

// Mobile menu toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Smooth scroll for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth',
        });
        if (!mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden');
      }
    }
  });
});

// Accordion
const accordions = document.querySelectorAll('.accordion');
accordions.forEach((acc) => {
  const trigger = acc.querySelector('.accordion-trigger');
  trigger?.addEventListener('click', () => {
    acc.classList.toggle('open');
  });
});

// AOS init
window.addEventListener('load', () => {
  AOS.init({ duration: 800, once: true, easing: 'ease-out-quart' });
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
});
