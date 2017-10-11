(function() {
  "use strict";

  function testWebP(callback) {
    var webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = webP.onerror = function () {
      callback(webP.height === 2);
    };
  };

  function notify(supported) {
    (supported) ? document.body.classList.add('webp') : document.body.classList.add('no-webp');
  }

  function ally_showActiveSection() {
    document.querySelectorAll('.content-wrapper').forEach(function(section) {
      section.setAttribute('aria-hidden', true);
      document.body.classList.remove('modal-opened');
    });

    if (location.hash &&
        location.hash.indexOf('home') === -1 &&
        document.querySelector(location.hash)) {
      document.querySelector(location.hash).setAttribute('aria-hidden', false);
      document.body.classList.add('modal-opened');
    }
  }

  function parallaxScrollListener(speed, range) {
    var banner_offset, calc, fullscreen_container, y_offset, bg;

    bg = document.querySelector('.masthead');
    y_offset = window.scrollY;
    fullscreen_container = document.body;
    banner_offset = fullscreen_container.offsetTop + fullscreen_container.height / 2;
    calc = 1 - (y_offset - banner_offset + range) / range;
    bg.style.backgroundPosition = '50% ' +  -(y_offset * speed) + 'px';
  }

  window.onload = function() {
    if (location.hash) {
      ally_showActiveSection()
    }
  }

  window.addEventListener('scroll', function onScroll() {
    if (!window.USER_IS_TOUCHING) {
      parallaxScrollListener(.2, 350);
    }
  });

  window.addEventListener('touchstart', function onFirstTouch() {
    window.USER_IS_TOUCHING = true;
    window.removeEventListener('touchstart', onFirstTouch, false);
    window.removeEventListener('scroll', false);
  }, false);

  window.onhashchange = ally_showActiveSection;

  testWebP(notify);
})();