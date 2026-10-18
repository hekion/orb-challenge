document.addEventListener('DOMContentLoaded', () => {
  const svgX = `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
  const svgYouTube = `<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
  const svgTikTok = `<svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.3 2.56.01.9.46 1.78 1.18 2.29.83.59 1.93.75 2.9.45.98-.28 1.78-1.03 2.06-2.02.13-.5.16-1.02.16-1.53V.02z"/></svg>`;

  // 階層判定 (footer/ フォルダ内にいる場合は ../ を付与)
  const isSubFolder = window.location.pathname.includes('/footer/');
  const basePath = isSubFolder ? '../' : '';

  // ご指定の公式URLをセット
  const urlX = 'https://x.com/ORBG_IBARAKI';
  const urlYouTube = 'https://www.youtube.com/@ORBGARDEN/videos';
  const urlTikTok = 'https://www.tiktok.com/@orb_garden?_t=ZS-8zfGGjCOhb6&_r=1';

  const headerHTML = `
    <header class="header">
      <div class="container">
        <div class="logo">
          <a href="${basePath}index.html">ORB GARDEN</a>
        </div>
        
        <button class="menu-toggle" id="menuToggle" aria-label="メニューを開閉">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="nav">
          <ul class="nav-list" id="navList">
            <li><a href="${basePath}about.html" class="nav-link">ABOUT</a></li>
            <li><a href="${basePath}news.html" class="nav-link">INFORMATION</a></li>
            <li><a href="${basePath}member.html" class="nav-link">MEMBER</a></li>
            <li><a href="${basePath}service.html" class="nav-link">SERVICE</a></li>
            <li><a href="${basePath}sponsor.html" class="nav-link">SPONSOR</a></li>
            <li><a href="${basePath}contact.html" class="nav-link">CONTACT</a></li>
            <li><a href="https://orbgarden.booth.pm/" target="_blank" rel="noopener noreferrer" class="nav-link nav-btn-store">STORE</a></li>
            
            <li class="mobile-overlay-sns">
              <a href="${urlX}" target="_blank" rel="noopener noreferrer" class="mobile-overlay-sns-icon" aria-label="X">${svgX}</a>
              <a href="${urlYouTube}" target="_blank" rel="noopener noreferrer" class="mobile-overlay-sns-icon" aria-label="YouTube">${svgYouTube}</a>
              <a href="${urlTikTok}" target="_blank" rel="noopener noreferrer" class="mobile-overlay-sns-icon" aria-label="TikTok">${svgTikTok}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  const placeholder = document.getElementById('header-placeholder');
  if (placeholder) {
    placeholder.innerHTML = headerHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }

  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navList.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navList.classList.remove('active');
        document.body.classList.remove('nav-open');
      });
    });
  }
});
