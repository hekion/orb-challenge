document.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
    <header class="header">
      <div class="container">
        <div class="logo">
          <a href="index.html">ORB GARDEN</a>
        </div>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">☰</button>
        <nav class="nav">
          <ul class="nav-list" id="navList">
            <li><a href="about.html" class="nav-link">ABOUT</a></li>
            <li><a href="news.html" class="nav-link">INFO</a></li>
            <li><a href="member.html" class="nav-link">MEMBER</a></li>
            <li><a href="service.html" class="nav-link">SERVICE</a></li>
            <li><a href="sponsor.html" class="nav-link">SPONSOR</a></li>
            <li><a href="contact.html" class="nav-link">CONTACT</a></li>
            <li><a href="https://orbgarden.booth.pm/" target="_blank" class="nav-link nav-btn-store">STORE</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  // #header-placeholder または bodyの先頭に埋め込み
  const placeholder = document.getElementById('header-placeholder');
  if (placeholder) {
    placeholder.innerHTML = headerHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }

  // スマホ用ハンバーガーメニューの開閉機能
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }
});
