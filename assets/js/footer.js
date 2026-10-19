document.addEventListener('DOMContentLoaded', () => {
  const svgX = `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
  const svgYouTube = `<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
  const svgTikTok = `<svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.3 2.56.01.9.46 1.78 1.18 2.29.83.59 1.93.75 2.9.45.98-.28 1.78-1.03 2.06-2.02.13-.5.16-1.02.16-1.53V.02z"/></svg>`;
  const svgArrowUp = `<svg viewBox="0 0 24 24"><path d="M12 4.293l7.707 7.707-1.414 1.414L13 8.121V20h-2V8.121l-5.293 5.293-1.414-1.414L12 4.293z"/></svg>`;

  // 階層判定 (footer/ フォルダ内にいる場合は ../ を付与)
  const isSubFolder = window.location.pathname.includes('/footer/');
  const basePath = isSubFolder ? '../' : '';
  const footerPrefix = isSubFolder ? '' : 'footer/';

  // ご指定の公式URLをセット
  const urlX = 'https://x.com/ORBG_IBARAKI';
  const urlYouTube = 'https://www.youtube.com/@ORBGARDEN/videos';
  const urlTikTok = 'https://www.tiktok.com/@orb_garden?_t=ZS-8zfGGjCOhb6&_r=1';

  const footerHTML = `
    <footer class="footer">
      <div class="container">
        
        <!-- PC版レイアウト -->
        <div class="footer-pc-layout">
          <div class="footer-sns-group">
            <a href="${urlX}" target="_blank" rel="noopener noreferrer" class="footer-sns-icon" aria-label="X (Twitter)">${svgX}</a>
            <a href="${urlYouTube}" target="_blank" rel="noopener noreferrer" class="footer-sns-icon" aria-label="YouTube">${svgYouTube}</a>
            <a href="${urlTikTok}" target="_blank" rel="noopener noreferrer" class="footer-sns-icon" aria-label="TikTok">${svgTikTok}</a>
          </div>
          <ul class="footer-links-group">
            <li><a href="${footerPrefix}privacy.html">プライバシーポリシー</a></li>
            <li><a href="${footerPrefix}fanletter.html">ファンレターとギフト</a></li>
            <li><a href="${footerPrefix}guideline.html">配信の切り抜きルール</a></li>
            <li><a href="${footerPrefix}legal.html">特定商取引法に関する表記</a></li>
            <li><a href="${footerPrefix}assets.html">デジタルアセット</a></li>
          </ul>
        </div>

        <!-- スマホ版レイアウト -->
        <div class="footer-mobile-only">
          <div class="footer-sns-group-mobile">
            <a href="${urlX}" target="_blank" rel="noopener noreferrer" class="footer-sns-icon" aria-label="X">${svgX}</a>
            <a href="${urlYouTube}" target="_blank" rel="noopener noreferrer" class="footer-sns-icon" aria-label="YouTube">${svgYouTube}</a>
            <a href="${urlTikTok}" target="_blank" rel="noopener noreferrer" class="footer-sns-icon" aria-label="TikTok">${svgTikTok}</a>
          </div>
          <ul class="footer-links-group-mobile">
            <li><a href="${footerPrefix}privacy.html">プライバシーポリシー</a></li>
            <li><a href="${footerPrefix}fanletter.html">ファンレターとギフト</a></li>
            <li><a href="${footerPrefix}guideline.html">切り抜きルール</a></li>
            <li><a href="${footerPrefix}legal.html">特商法表記</a></li>
            <li><a href="${footerPrefix}assets.html">デジタルアセット</a></li>
          </ul>
          <div class="footer-team-logo">ORB GARDEN</div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ORB GARDEN All Rights Reserved.</p>
        </div>
      </div>
    </footer>

    <!-- ページトップへ戻るボタン -->
    <button id="pageTopBtn" class="pagetop-btn" aria-label="ページ最上部へ戻る">
      ${svgArrowUp}
    </button>
  `;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.innerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // ページトップスクロール制御
  const pageTopBtn = document.getElementById('pageTopBtn');
  if (pageTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        pageTopBtn.classList.add('is-active');
      } else {
        pageTopBtn.classList.remove('is-active');
      }
    });

    pageTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
