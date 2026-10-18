document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.member-tabs .tab-btn');
  const memberCards = document.querySelectorAll('.member-card');

  if (tabBtns.length > 0 && memberCards.length > 0) {
    // ページ読み込み時に初期アクティブなカテゴリ（streamer）のカード以外を隠す処理
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

    // タブクリック時の切り替え制御
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
