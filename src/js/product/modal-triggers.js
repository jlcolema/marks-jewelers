import { AddToCartModal } from './add-to-cart-modal';

export default function modalTriggers() {
  const modals = document.querySelectorAll('[data-modal="true"]');
  modals.forEach(item => {
    item.addEventListener('click', e => {
      let variantId;
      const target = item;
      e.preventDefault();
      if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') === 'modal') {
        if (target.hasAttribute('data-target')) {
          const mID = target.getAttribute('data-target');
          if (target.classList.contains('btn-add-cart')) {
            if (document.querySelector('.product-options')) {
              variantId = document.querySelector('.product-options').value;
            } else {
              const variantIdDiv = document.querySelector('.product-page__single-variant');
              variantId = variantIdDiv.getAttribute('data-value');
            }
            AddToCartModal(variantId);
            setTimeout(() => {
              document.getElementById(mID)
                .classList
                .add('open');
            }, 1000);
          } else {
            document.getElementById(mID)
              .classList
              .add('open');
          }
        }
      }
      // Close modal window with 'data-dismiss' attribute or when the overlay is clicked
      if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') === 'modal') || target.classList.contains('modals')) {
        const modal = document.querySelector('[class="modals open"]');
        modal.classList.remove('open');
      }
    }, false);
  });
}
