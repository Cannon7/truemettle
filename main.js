const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (i * 0.08) + 's';
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  
  // ── FORM SUBMIT ──
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    btn.textContent = 'Inquiry Sent ✦';
    btn.style.background = 'var(--sage)';
    btn.disabled = true;
  }
  
  // ── NAV SCROLL EFFECT ──
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 60) {
      nav.style.padding = '1rem 3rem';
      nav.style.borderBottomColor = 'rgba(181,144,117,0.3)';
    } else {
      nav.style.padding = '1.5rem 3rem';
      nav.style.borderBottomColor = 'rgba(181,144,117,0.2)';
    }
  });