window.HELP_IMPROVE_VIDEOJS = false;

// ===== Scroll to Top =====
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
  var btn = document.querySelector('.scroll-to-top');
  if (btn) {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }
});

// ===== Copy BibTeX =====
function copyBibTeX() {
  var bibtexCode = document.getElementById('bibtex-code');
  if (!bibtexCode) return;

  var text = bibtexCode.innerText || bibtexCode.textContent;
  navigator.clipboard.writeText(text).then(function() {
    var btn = document.querySelector('.copy-bibtex-btn');
    if (btn) {
      btn.classList.add('copied');
      btn.querySelector('.copy-text').textContent = 'Copied!';
      setTimeout(function() {
        btn.classList.remove('copied');
        btn.querySelector('.copy-text').textContent = 'Copy';
      }, 2000);
    }
  });
}

// ===== Document Ready =====
$(document).ready(function() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  if (typeof bulmaCarousel !== 'undefined' && document.querySelector('.carousel')) {
    var options = {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
    };
    bulmaCarousel.attach('.carousel', options);
  }

  if (typeof bulmaSlider !== 'undefined') {
    bulmaSlider.attach();
  }
});
