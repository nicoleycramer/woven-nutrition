// === HEADER — edit here to update all pages at once ===
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  siteHeader.innerHTML = `
    <nav class="nav-inner" aria-label="Main navigation">
      <a href="index.html" class="nav-logo">Woven Nutrition</a>
      <button class="nav-hamburger" id="nav-hamburger" aria-expanded="false" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html">Home</a></li>
        <li class="nav-has-dropdown">
          <button aria-haspopup="true">About &#9662;</button>
          <ul class="nav-dropdown">
            <li><a href="about.html">About</a></li>
            <li><a href="our-philosophy.html">Our Philosophy</a></li>
            <li><a href="our-team.html">Our Team</a></li>
          </ul>
        </li>
        <li><a href="services-and-rates.html">Services and Rates</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="https://woven-nutrition.clientsecure.me" target="_blank" rel="noopener">Client Portal</a></li>
        <li class="nav-cta"><a href="#" target="_blank" data-contact-link>Contact</a></li>
      </ul>
    </nav>
  `;
}

// === FOOTER — edit here to update all pages at once ===
const siteFooter = document.querySelector('.site-footer');
if (siteFooter) {
  siteFooter.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">Woven Nutrition</a>
          <p>We offer in-person nutrition counseling in Seattle, as well as virtual counseling throughout Washington State.</p>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="our-philosophy.html">Our Philosophy</a></li>
            <li><a href="our-team.html">Our Team</a></li>
            <li><a href="services-and-rates.html">Services and Rates</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li class="nav-cta"><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <p>2033 Minor Ave E, #2<br>Seattle, WA 98102</p>
          <p style="margin-top:0.75rem"><a href="mailto:info@woven-nutrition.com">info@woven-nutrition.com</a></p>
          <p style="margin-top:0.75rem">
            <a href="https://www.instagram.com/woven.nutrition" target="_blank" rel="noopener" class="instagram-link" aria-label="Woven Nutrition on Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              <span>@woven.nutrition</span>
            </a>
          </p>
          <p style="margin-top:0.5rem"><a href="https://woven-nutrition.clientsecure.me" target="_blank" rel="noopener">Client Portal</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 by Woven Nutrition, PLLC</p>
        <div class="footer-legal">
          <a href="https://docs.google.com/document/d/1AbwneRyCwDxxq78TiFflVMPt1zMN9DfYrLROVnLOHkI/edit?tab=t.0">Website Disclaimer</a>
          <a href="https://docs.google.com/document/d/1f4zEAQ9pcOfoDMEiSQzqb-ne_F5TWjEHEtUJicaVorA/edit?tab=t.0">Website Privacy Policy</a>
          <a href="https://docs.google.com/document/d/1RFdCCmVTp_0HcXCPPQ4llJw_L-SSNfe0TgRqB7XxjVY/edit?tab=t.0">HIPAA Notice of Privacy Practices</a>
          <a href="https://docs.google.com/document/d/1T_yzaU8aV_46DBdEdOQLGEtMWRDNaijQikCXw0_1Atk/edit?tab=t.0">No Surprises Act and Good Faith Estimate</a>
        </div>
      </div>
    </div>
  `;
}

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

  const AUTO_ADVANCE_MS = 12000;
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

// Mark active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === path || (path === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
