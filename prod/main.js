(function() {
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

  window.onload = function() {
    if (location.hash) {
      ally_showActiveSection()
    }
  }

  window.onhashchange = ally_showActiveSection;


  testWebP(notify);
})();