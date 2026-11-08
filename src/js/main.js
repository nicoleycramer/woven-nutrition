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

  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
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
    const isOpen = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });
});

// Testimonials carousel
const testimonialsTrack = document.querySelector('.testimonials-track');
if (testimonialsTrack) {
  const slides = Array.from(testimonialsTrack.querySelectorAll('.testimonial-slide'));
  const dotsWrap = document.querySelector('.carousel-dots');
  const prevBtn = document.querySelector('.carousel-arrow-prev');
  const nextBtn = document.querySelector('.carousel-arrow-next');
  let current = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    testimonialsTrack.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  const AUTO_ADVANCE_MS = 10000;
  const carousel = document.querySelector('.testimonials-carousel');
  let autoAdvance;

  function startAutoAdvance() {
    autoAdvance = setInterval(() => goTo(current + 1), AUTO_ADVANCE_MS);
  }
  function restartAutoAdvance() {
    clearInterval(autoAdvance);
    startAutoAdvance();
  }

  prevBtn.addEventListener('click', () => { goTo(current - 1); restartAutoAdvance(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); restartAutoAdvance(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => restartAutoAdvance()));

  carousel.addEventListener('mouseenter', () => clearInterval(autoAdvance));
  carousel.addEventListener('mouseleave', startAutoAdvance);

  goTo(0);
  startAutoAdvance();
}
