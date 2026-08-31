const headerMarkup = `
  <header class="header">
    <nav class="navbar">
      <a href="/html/index.html" class="logo" id="logo">
        <img src="/img/HS-StudioLogo_v01-blackOnWhite.png" alt="Hernández Sánchez Studio">
      </a>
      <div class="flex-container">
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="/html/contact.html" class="contact-link nav-link">Contacto</a>
          </li>
        </ul>
      </div>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>`;

const footerMarkup = `
  <footer>
    <p>made with ❤️ by HS Studio. 2026.</p>
  </footer>`;

document.querySelectorAll('[data-site-header]').forEach((placeholder) => {
  placeholder.outerHTML = headerMarkup;
});

document.querySelectorAll('[data-site-footer]').forEach((placeholder) => {
  placeholder.outerHTML = footerMarkup;
});
