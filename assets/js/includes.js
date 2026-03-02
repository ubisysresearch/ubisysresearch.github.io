(function () {
  // Inject Font Awesome globally (skip if already loaded)
  if (!document.querySelector('link[href*="font-awesome"]')) {
    var faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(faLink);
  }

  // --- Build navbar via DOM ---
  var nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark sticky-top';

  var container = document.createElement('div');
  container.className = 'container';

  var brand = document.createElement('a');
  brand.className = 'navbar-brand d-flex align-items-center';
  brand.href = 'index.html';
  var logoImg = document.createElement('img');
  logoImg.src = 'assets/img/logo.png';
  logoImg.alt = 'UbiSys Logo';
  brand.appendChild(logoImg);
  brand.appendChild(document.createTextNode(' UbiSys Lab'));

  var toggler = document.createElement('button');
  toggler.className = 'navbar-toggler';
  toggler.type = 'button';
  toggler.setAttribute('data-bs-toggle', 'collapse');
  toggler.setAttribute('data-bs-target', '#navbarNav');
  var span = document.createElement('span');
  span.className = 'navbar-toggler-icon';
  toggler.appendChild(span);

  var collapse = document.createElement('div');
  collapse.className = 'collapse navbar-collapse justify-content-end';
  collapse.id = 'navbarNav';

  var ul = document.createElement('ul');
  ul.className = 'navbar-nav';

  var navItems = [
    ['index.html', 'Home'],
    ['projects.html', 'Projects'],
    ['news.html', 'News'],
    ['publications.html', 'Publications'],
    ['team.html', 'Team'],
    ['join.html', 'Join Us'],
    ['contact.html', 'Contact']
  ];
  navItems.forEach(function (item) {
    var li = document.createElement('li');
    li.className = 'nav-item';
    var a = document.createElement('a');
    a.className = 'nav-link';
    a.href = item[0];
    a.textContent = item[1];
    li.appendChild(a);
    ul.appendChild(li);
  });

  collapse.appendChild(ul);
  container.appendChild(brand);
  container.appendChild(toggler);
  container.appendChild(collapse);
  nav.appendChild(container);

  // --- Build footer via DOM ---
  var footer = document.createElement('footer');
  footer.className = 'text-white pt-5 pb-3';

  var fContainer = document.createElement('div');
  fContainer.className = 'container';

  var row = document.createElement('div');
  row.className = 'row gy-4';

  // Quick Links column
  var col1 = document.createElement('div');
  col1.className = 'col-md-4';
  var h5Links = document.createElement('h5');
  h5Links.className = 'fw-bold mb-3';
  h5Links.textContent = 'Quick Links';
  col1.appendChild(h5Links);

  var linkList = document.createElement('ul');
  linkList.className = 'list-unstyled';
  var footerLinks = [
    ['index.html', 'Home'],
    ['projects.html', 'Projects'],
    ['publications.html', 'Publications'],
    ['team.html', 'Team'],
    ['join.html', 'Join Us']
  ];
  footerLinks.forEach(function (item) {
    var li = document.createElement('li');
    li.className = 'mb-2';
    var a = document.createElement('a');
    a.href = item[0];
    a.className = 'text-white-50 text-decoration-none';
    var chevron = document.createElement('i');
    chevron.className = 'fas fa-chevron-right me-2';
    chevron.style.fontSize = '0.7rem';
    a.appendChild(chevron);
    a.appendChild(document.createTextNode(item[1]));
    li.appendChild(a);
    linkList.appendChild(li);
  });
  col1.appendChild(linkList);

  // Contact column
  var col2 = document.createElement('div');
  col2.className = 'col-md-4';
  var h5Contact = document.createElement('h5');
  h5Contact.className = 'fw-bold mb-3';
  h5Contact.textContent = 'Contact';
  col2.appendChild(h5Contact);

  var emailP = document.createElement('p');
  emailP.className = 'text-white-50 mb-2';
  var emailIcon = document.createElement('i');
  emailIcon.className = 'fas fa-envelope me-2';
  emailP.appendChild(emailIcon);
  var emailLink = document.createElement('a');
  emailLink.href = 'mailto:suchetana@iitj.ac.in';
  emailLink.className = 'text-white-50 text-decoration-none';
  emailLink.textContent = 'suchetana@iitj.ac.in';
  emailP.appendChild(emailLink);
  col2.appendChild(emailP);

  var addrP = document.createElement('p');
  addrP.className = 'text-white-50 mb-0';
  var mapIcon = document.createElement('i');
  mapIcon.className = 'fas fa-map-marker-alt me-2';
  addrP.appendChild(mapIcon);
  addrP.appendChild(document.createTextNode('Department of CSE,'));
  addrP.appendChild(document.createElement('br'));
  var span1 = document.createElement('span');
  span1.className = 'ms-4';
  span1.textContent = 'IIT Jodhpur, NH 62,';
  addrP.appendChild(span1);
  addrP.appendChild(document.createElement('br'));
  var span2 = document.createElement('span');
  span2.className = 'ms-4';
  span2.textContent = 'Karwar 342030, Rajasthan';
  addrP.appendChild(span2);
  col2.appendChild(addrP);

  // About column
  var col3 = document.createElement('div');
  col3.className = 'col-md-4';
  var h5About = document.createElement('h5');
  h5About.className = 'fw-bold mb-3';
  h5About.textContent = 'UbiSys Lab';
  col3.appendChild(h5About);
  var aboutP = document.createElement('p');
  aboutP.className = 'text-white-50';
  aboutP.textContent = 'Exploring ubiquitous sensing, AIoT, and human\u2011machine interfaces at the Indian Institute of Technology Jodhpur.';
  col3.appendChild(aboutP);

  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  fContainer.appendChild(row);

  var hr = document.createElement('hr');
  hr.className = 'border-secondary mt-4 mb-3';
  fContainer.appendChild(hr);

  var copyP = document.createElement('p');
  copyP.className = 'text-center text-white-50 mb-0';
  copyP.appendChild(document.createTextNode('\u00A9 '));
  var yearSpanEl = document.createElement('span');
  yearSpanEl.id = 'footer-year';
  copyP.appendChild(yearSpanEl);
  copyP.appendChild(document.createTextNode(' UbiSys Lab, Department of CSE, IIT Jodhpur'));
  fContainer.appendChild(copyP);

  footer.appendChild(fContainer);

  // Inject navbar and footer
  var navEl = document.getElementById('navbar-placeholder');
  var footEl = document.getElementById('footer-placeholder');
  if (navEl) {
    navEl.textContent = '';
    navEl.appendChild(nav);
  }
  if (footEl) {
    footEl.textContent = '';
    footEl.appendChild(footer);
  }

  // Set active nav link based on current page
  var path = window.location.pathname;
  var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  var activeHref = (page === 'project-details.html') ? 'projects.html' : page;

  var navLinksAll = document.querySelectorAll('#navbarNav .nav-link');
  navLinksAll.forEach(function (link) {
    if (link.getAttribute('href') === activeHref) {
      link.classList.add('active');
    }
  });

  // Set footer year
  var yearSpan = document.getElementById('footer-year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Scroll-to-top button
  var scrollBtn = document.createElement('button');
  scrollBtn.id = 'scroll-to-top';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  var scrollIcon = document.createElement('i');
  scrollIcon.className = 'fas fa-chevron-up';
  scrollBtn.appendChild(scrollIcon);
  scrollBtn.style.cssText = 'display:none;position:fixed;bottom:2rem;right:2rem;z-index:1050;' +
    'width:44px;height:44px;border:none;border-radius:50%;' +
    'background-color:var(--accent,#1a6fa8);color:#fff;font-size:1.1rem;' +
    'cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.15);' +
    'transition:opacity 0.3s ease,transform 0.3s ease;opacity:0;transform:translateY(10px);';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'flex';
      scrollBtn.style.alignItems = 'center';
      scrollBtn.style.justifyContent = 'center';
      setTimeout(function () {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.transform = 'translateY(0)';
      }, 10);
    } else {
      scrollBtn.style.opacity = '0';
      scrollBtn.style.transform = 'translateY(10px)';
      setTimeout(function () {
        if (window.scrollY <= 300) scrollBtn.style.display = 'none';
      }, 300);
    }
  });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Re-trigger AOS on injected elements
  if (typeof AOS !== 'undefined') AOS.refresh();
})();
