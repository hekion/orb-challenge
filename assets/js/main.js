document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const memberCards = document.querySelectorAll('.member-card');

  if (tabBtns.length > 0 && memberCards.length > 0) {
    const defaultCategory = 'streamer';
    
    tabBtns.forEach(btn => {
      const category = btn.getAttribute('data-category');
      
      if (category === defaultCategory) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }

      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const selectedCat = btn.getAttribute('data-category');

        memberCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          
          if (selectedCat === 'all' || cardCategory === selectedCat) {
            card.classList.remove('hide');
          } else {
            card.classList.add('hide');
          }
        });
      });
    });

    memberCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (cardCategory === defaultCategory) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  }
});
