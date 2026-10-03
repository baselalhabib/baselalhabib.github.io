(function () {
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Skills tabs with a sliding underline
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
  var ul = document.querySelector('.ul');
  function place() {
    var t = document.querySelector('[role="tab"][aria-selected="true"]');
    ul.style.width = t.offsetWidth + 'px';
    ul.style.transform = 'translateX(' + t.offsetLeft + 'px)';
  }
  tabs.forEach(function (b) {
    b.addEventListener('click', function () {
      tabs.forEach(function (o) {
        var on = o === b;
        o.setAttribute('aria-selected', on);
        document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
      });
      place();
    });
  });
  place();
  addEventListener('load', place);
  addEventListener('resize', place);

  // Everything below is motion; skip it for reduced-motion visitors
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.doodle .d').forEach(function (el, i) {
    el.setAttribute('pathLength', '1');
    el.style.setProperty('--i', i);
  });
  document.documentElement.classList.add('js');

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.strip, .sec > *').forEach(function (el) {
    el.classList.add('rv');
    io.observe(el);
  });
})();
