document.addEventListener('DOMContentLoaded', () => {
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3>ORB GARDEN</h3>
            <p>茨城発 ストリートスタイルeスポーツチーム</p>
          </div>
          <nav class="footer-nav">
            <ul>
              <li><a href="about.html">ABOUT</a></li>
              <li><a href="news.html">INFO</a></li>
              <li><a href="member.html">MEMBER</a></li>
              <li><a href="service.html">SERVICE</a></li>
              <li><a href="sponsor.html">SPONSOR</a></li>
              <li><a href="contact.html">CONTACT</a></li>
              <li><a href="https://orbgarden.booth.pm/" target="_blank">STORE</a></li>
            </ul>
          </nav>
        </div>
        <div class="footer-bottom">
          <p>&copy; ORB GARDEN All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `;

  // #footer-placeholder または bodyの末尾に埋め込み
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.innerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
});
