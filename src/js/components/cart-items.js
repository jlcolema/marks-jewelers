class RecentlyViewed {
  constructor(element) {
    this.element = element;
    this.items = this.element.querySelectorAll('.cart__item');

    if (this.items) {
      this.reduceQty();
    }
  }

  reduceQty() {
    this.items.forEach(item => {
      const itemId = item.dataset.id;
      const itemQtyDec = item.querySelector('.qty__control--reduce');
      const itemQty = parseInt(item.querySelector('.qty-count').textContent, 10);
      const itemRemoveLink = item.querySelector('.cart__item-links--remove').getAttribute('href');

      itemQtyDec.addEventListener('click', () => {
        if (itemQty === 1) {
          window.location.href = itemRemoveLink;
        } else if (itemQty > 1) {
          const updatePayload = { updates: {} };
          updatePayload.updates[itemId] = itemQty - 1;

          fetch('/cart/update.js', {
            body: JSON.stringify(updatePayload),
            credentials: 'same-origin',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json'
            },
            method: 'POST',
          }).then(_ => {
            window.location.reload();
          }).catch(err => {
            console.log(err);
          });
        }
      });
    });
  }
}

export default RecentlyViewed;
