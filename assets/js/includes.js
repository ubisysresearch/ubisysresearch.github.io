(function () {
  var NAVBAR_HTML = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">' +
    '<div class="container">' +
      '<a class="navbar-brand d-flex align-items-center" href="index.html"><img src="assets/img/logo.png" alt="UbiSys Logo"> UbiSys Lab</a>' +
      '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">' +
        '<span class="navbar-toggler-icon"></span>' +
      '</button>' +
      '<div class="collapse navbar-collapse justify-content-end" id="navbarNav">' +
        '<ul class="navbar-nav">' +
          '<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>' +
          '<li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>' +
          '<li class="nav-item"><a class="nav-link" href="news.html">News</a></li>' +
          '<li class="nav-item"><a class="nav-link" href="publications.html">Publications</a></li>' +
          '<li class="nav-item"><a class="nav-link" href="team.html">Team</a></li>' +
          '<li class="nav-item"><a class="nav-link" href="join.html">Join Us</a></li>' +
          '<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>' +
        '</ul>' +
      '</div>' +
    '</div>' +
  '</nav>';

  var FOOTER_HTML = '<footer class="bg-dark text-white text-center">' +
    '<div class="container">' +
      '<p class="mb-0 py-3">&copy; <span id="footer-year"></span> UbiSys Lab, Department of CSE, IIT Jodhpur</p>' +
    '</div>' +
  '</footer>';

  // Inject navbar and footer
  var navEl = document.getElementById('navbar-placeholder');
  var footEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.innerHTML = NAVBAR_HTML;
  if (footEl) footEl.innerHTML = FOOTER_HTML;

  // Set active nav link based on current page
  var path = window.location.pathname;
  var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  var activeHref = (page === 'project-details.html') ? 'projects.html' : page;

  var navLinks = document.querySelectorAll('#navbarNav .nav-link');
  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === activeHref) {
      link.classList.add('active');
    }
  });

  // Set footer year
  var yearSpan = document.getElementById('footer-year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Re-trigger AOS on injected elements
  if (typeof AOS !== 'undefined') AOS.refresh();
})();
