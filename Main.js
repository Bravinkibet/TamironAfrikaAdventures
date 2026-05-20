/* ============================================================
   TAMIRON AFRIKA ADVENTURES — main.js
   Shared scripts for all pages
   ============================================================ */

/* ── CUSTOM CURSOR ── */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx - 5 + 'px';
    cursor.style.top  = my - 5 + 'px';
  });

  (function animateRing() {
    rx += (mx - rx - 18) * 0.18;
    ry += (my - ry - 18) * 0.18;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  document.querySelectorAll('a, button, input, select, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      ring.style.transform   = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      ring.style.transform   = 'scale(1)';
    });
  });
})();

/* ── NAV SCROLL ── */
(function initNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
})();

/* ── HERO KEN BURNS ── */
(function initHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  window.addEventListener('load', () => hero.classList.add('loaded'));
})();

/* ── PAGE HERO KEN BURNS ── */
(function initPageHero() {
  const ph = document.querySelector('.page-hero');
  if (!ph) return;
  window.addEventListener('load', () => ph.classList.add('loaded'));
})();

/* ── HAMBURGER MENU ── */
(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));

  // expose globally so inline onclick="closeMobileNav()" works
  window.closeMobileNav = () => mobileNav.classList.remove('open');
})();

/* ── SCROLL REVEAL ── */
(function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Stagger stats strip
  document.querySelectorAll('.stats-strip .stat').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.12) + 's';
  });

  // Stagger destination cards
  document.querySelectorAll('.dest-card').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.1) + 's';
  });
})();

/* ── ITINERARY TABS ── */
(function initItineraryTabs() {
  window.showDay = function(index) {
    document.querySelectorAll('.itin-day-btn').forEach((btn, i) =>
      btn.classList.toggle('active', i === index)
    );
    document.querySelectorAll('.itin-panel').forEach((panel, i) =>
      panel.classList.toggle('active', i === index)
    );
  };
})();

/* ── CONTACT FORM ── */
(function initForm() {
  window.handleSubmit = function(e) {
    e.preventDefault();
    e.target.style.display = 'none';
    const success = document.getElementById('form-success');
    if (success) success.style.display = 'block';
  };
})();