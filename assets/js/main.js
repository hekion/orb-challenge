document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. トップページ用 ニュース自動振り分け（本文なし・タイトルのみ）
  // ==========================================
  const topMainNews = document.getElementById('topMainNews');
  const topSubNews = document.getElementById('topSubNews');

  if (topMainNews && topSubNews && typeof newsData !== 'undefined' && newsData.length > 0) {
    // 1番新しい記事 (メイン大枠)
    const latest = newsData[0];
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
        </div>
      </a>
    `;

    // 2〜4番目の記事 (サブ3件横並び)
    let subHtml = '';
    const subList = newsData.slice(1, 4);
    subList.forEach(item => {
      subHtml += `
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
      `;
    });
    topSubNews.innerHTML = subHtml;
  }

  // ==========================================
  // 2. メンバータブ切り替え制御 (STREAMERスタート)
  // ==========================================
  const tabBtns = document.querySelectorAll('.member-tabs .tab-btn');
  const memberCards = document.querySelectorAll('.member-card');

  if (tabBtns.length > 0 && memberCards.length > 0) {
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
