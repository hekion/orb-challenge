document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. トップページ用 ニュース自動振り分け
  // ==========================================
  const topMainNews = document.getElementById('topMainNews');
  const topSubNews = document.getElementById('topSubNews');

  if (topMainNews && topSubNews) {
    if (typeof newsData !== 'undefined' && newsData.length > 0) {
      // 最新ニュース（1件目）
      const latest = newsData[0];
      const plainTextMain = latest.content ? latest.content.replace(/<[^>]+>/g, '').replace(/\n/g, ' ') : '';
      
      topMainNews.innerHTML = `
        <a href="news-detail.html?id=${latest.id}" class="news-main-card" style="text-decoration:none; color:inherit;">
          <div class="news-thumb-box">
            <img src="${latest.thumbnail}" alt="${latest.title}" onerror="this.style.background='#1e293b'">
          </div>
          <div class="news-main-content">
            <div class="news-meta">
              <span class="news-date">${latest.date}</span>
              <span class="news-tag">${latest.tag}</span>
            </div>
            <h3 class="news-title">${latest.title}</h3>
            <p class="news-excerpt" style="font-size: 0.85rem; color: #94a3b8; margin-top: 8px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${plainTextMain.substring(0, 90)}...</p>
          </div>
        </a>
      `;

      // 2〜4番目の記事 (サブ3件横並び)
      const subItems = newsData.slice(1, 4);
      topSubNews.innerHTML = subItems.map(item => `
        <a href="news-detail.html?id=${item.id}" class="news-sub-card" style="text-decoration:none; color:inherit;">
          <div class="news-thumb-box">
            <img src="${item.thumbnail}" alt="${item.title}" onerror="this.style.background='#1e293b'">
          </div>
          <div class="news-sub-content">
            <div class="news-meta">
              <span class="news-date">${item.date}</span>
              <span class="news-tag">${item.tag}</span>
            </div>
            <h4 class="news-title">${item.title}</h4>
          </div>
        </a>
      `).join('');
    } else {
      topMainNews.innerHTML = '<p style="color: #94a3b8; padding: 20px 0;">現在お知らせはありません。</p>';
    }
  }


  // ==========================================
  // 2. メンバータブ切り替え制御 (STREAMERスタート)
  // ==========================================
  const tabBtns = document.querySelectorAll('.member-tabs .tab-btn');
  const memberCards = document.querySelectorAll('.member-card');

  if (tabBtns.length > 0 && memberCards.length > 0) {
    // 初期表示：アクティブなタブ（streamer）のカード以外を非表示にする
    const activeTab = document.querySelector('.member-tabs .tab-btn.active');
    if (activeTab) {
      const initialCat = activeTab.getAttribute('data-category');
      memberCards.forEach(card => {
        if (card.getAttribute('data-category') === initialCat) {
          card.classList.remove('hide');
          card.style.display = 'flex';
        } else {
          card.classList.add('hide');
          card.style.display = 'none';
        }
      });
    }

    // タブクリック時のフィルタリング制御
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const selectedCategory = btn.getAttribute('data-category');

        memberCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');

          if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.classList.remove('hide');
            card.style.display = 'flex';
          } else {
            card.classList.add('hide');
            card.style.display = 'none';
          }
        });
      });
    });
  }

});
