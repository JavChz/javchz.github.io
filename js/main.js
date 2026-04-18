/**
 * Scroll-triggered fade-in for the projects section.
 * On desktop the page fits in one viewport, so this mainly
 * fires on mobile where scrolling is required.
 */
(function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll('[data-animate-on-scroll]')
    .forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
      observer.observe(el);
    });
})();
