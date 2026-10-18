document.addEventListener('DOMContentLoaded', () => {
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        
        <!-- PC版レイアウト -->
        <div class="footer-pc-layout">
          <div class="footer-sns-group">
            <a href="https://x.com/" target="_blank">X (Twitter)</a>
            <a href="https://youtube.com/" target="_blank">YouTube</a>
            <a href="https://tiktok.com/" target="_blank">TikTok</a>
          </div>
          <ul class="footer-links-group">
            <li><a href="privacy.html">プライバシーポリシー</a></li>
            <li><a href="fanletter.html">ファンレターとギフト</a></li>
            <li><a href="guideline.html">配信の切り抜きルール</a></li>
            <li><a href="legal.html">特定商取引法に関する表記</a></li>
            <li><a href="assets.html">デジタルアセット</a></li>
          </ul>
        </div>

        <!-- スマホ版レイアウト -->
        <div class="footer-mobile-only">
          <div class="footer-sns-group-mobile">
            <a href="https://x.com/" target="_blank">X</a>
            <a href="https://youtube.com/" target="_blank">YouTube</a>
            <a href="https://tiktok.com/" target="_blank">TikTok</a>
          </div>
          <ul class="footer-links-group-mobile">
            <li><a href="privacy.html">プライバシーポリシー</a></li>
            <li><a href="fanletter.html">ファンレターとギフト</a></li>
            <li><a href="guideline.html">切り抜きルール</a></li>
            <li><a href="legal.html">特商法表記</a></li>
            <li><a href="assets.html">デジタルアセット</a></li>
          </ul>
          <div class="footer-team-logo">ORB GARDEN</div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ORB GARDEN All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.innerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
});
