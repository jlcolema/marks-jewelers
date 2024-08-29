const scrollTop = () => {
  const announceBarHeight = document.querySelector('#shopify-section-announcement-bar')?.offsetHeight || 0;
  const headerHeight = document.querySelector('#shopify-section-header')?.offsetHeight || 0;
  const heroHeight = document.querySelector('.repairs__hero')?.offsetHeight || 0;
  const scrollOffset = announceBarHeight + headerHeight + heroHeight - 65;
  window.scrollTo({
    top: scrollOffset,
    behavior: 'smooth'
  });
};

let estimateBtn = document.querySelector('.repairs__content a.btn');
if (estimateBtn) {
  estimateBtn.addEventListener('click', scrollTop);
} else {
  const contentTarget = document.querySelector('.repairs__content');
  const contentObserver = new MutationObserver(() => {
    estimateBtn = contentTarget.querySelector('a.btn');
    if (estimateBtn) {
      contentObserver.disconnect();
      estimateBtn.addEventListener('click', scrollTop);
    }
  });
  contentObserver.observe(contentTarget, { subtree: true, childList: true });
}
