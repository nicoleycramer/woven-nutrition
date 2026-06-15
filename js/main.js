// === CONTACT URL — change here to update all contact links site-wide ===
const CONTACT_URL = 'https://woven-nutrition.clientsecure.me/contact-widget';
document.querySelectorAll('[data-contact-link]').forEach(el => {
  el.href = CONTACT_URL;
});

// Mobile nav toggle
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
}

// Mobile dropdown toggle
document.querySelectorAll('.nav-has-dropdown > button').forEach(btn => {
  btn.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      btn.closest('.nav-has-dropdown').classList.toggle('open');
    }
  });
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Mark active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === path || (path === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
