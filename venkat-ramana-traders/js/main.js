// Venkat Ramana Traders — shared site behaviour
// Mobile hamburger menu toggle. No frameworks, no dependencies.
(function () {
  'use strict';

  function init() {
    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.nav-toggle');

    if (!header || !toggle) return;

    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the menu when a nav link is chosen
    var links = header.querySelectorAll('.nav-links a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close the menu on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        header.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
