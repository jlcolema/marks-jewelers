export default function addToWishlist() {
  const wishListElem = document.querySelector('.product-page__wish-drop .heart');

  const mutTarget = document.querySelector('#main');
  const mutObserver = new MutationObserver(() => {
    if (mutTarget.querySelector('.swym-wishlist-cta')) {
      const wishlistCTA = document.querySelector('.swym-wishlist-cta');
      if (wishlistCTA.textContent.toLowerCase() === 'added to wishlist') {
        wishListElem.style.display = 'none';
      } else {
        wishListElem.style.display = 'flex';
      }
    }
  });
  mutObserver.observe(mutTarget, {
    subtree: true,
    childList: true,
  });

  if (wishListElem) {
    wishListElem.addEventListener('click', () => {
      document.querySelector('.swym-wishlist-button-bar button')
        .click();
    });
  }
}
