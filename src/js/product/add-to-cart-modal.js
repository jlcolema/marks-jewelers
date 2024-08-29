function AddToCartModal(variant) {
  const addToCartModalContainer = document.querySelector('#add-to-cart-modal');
  function activateAddToCartModal(modalData) {
    if (addToCartModalContainer) {
      // prod image
      const prodImg = addToCartModalContainer.querySelector('.modal-image img');
      prodImg.setAttribute('src', modalData.image);
      // added Qty
      const addedQty = addToCartModalContainer.querySelector('.add-qty');
      addedQty.innerHTML = modalData.quantity;
      // prod title
      const prodTitle = addToCartModalContainer.querySelector('.product-title');
      prodTitle.innerHTML = modalData.title;
      // prod price
      const prodPrice = addToCartModalContainer.querySelector('.product-price');
      prodPrice.innerHTML = modalData.price;
      // prod variant title
      if (modalData.option !== 'Title') {
        const prodVarTitle = addToCartModalContainer.querySelector('.option-title');
        prodVarTitle.innerHTML = modalData.option;
      }
      // prod variant
      const prodVariant = addToCartModalContainer.querySelector('.selected-option');
      prodVariant.innerHTML = modalData.size;
      // prod Qty
      const prodQty = addToCartModalContainer.querySelector('.prod-qty');
      prodQty.innerHTML = modalData.itemQty;
      // cart Qty
      const cartQty = addToCartModalContainer.querySelector('.total-items-in-cart');
      cartQty.innerHTML = modalData.cart;
      // cart subtotal
      const cartSub = addToCartModalContainer.querySelector('.cart-subtotal-price');
      cartSub.innerHTML = modalData.subtotal;
    }
  }
  function updateCartQuantity(count) {
    const cartLinkBubble = document.querySelector('.header__cart-count');
    if (cartLinkBubble) {
      cartLinkBubble.innerHTML = count;
    }
  }
  let addedItemQuant = '';
  const quantSelect = document.querySelector('input[name="quantity"]');
  if (quantSelect) {
    addedItemQuant = quantSelect.value;
  }
  const formData = {
    items: [{
      id: variant,
      quantity: addedItemQuant
    }]
  };
  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(() => {
    fetch('/cart.js').then(data => data.json()).then(response => {
      let modalItemImage = '';
      let modalItemVendor = '';
      let modalItemTitle = '';
      let modalItemOption = '';
      let modalItemSize = '';
      let modalItemQuantity = '';
      let modalAddedQuantity = '';
      let modalItemPrice = '';
      let modalCartPrice = '';
      let modalCartCount = '';
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      modalItemImage = response.items[0].image;
      modalItemVendor = response.items[0].vendor;
      modalItemTitle = response.items[0].product_title;
      modalItemOption = response.items[0].options_with_values[0].name;
      modalItemSize = response.items[0].variant_title;
      modalItemQuantity = response.items[0].quantity;
      modalAddedQuantity = addedItemQuant;
      modalItemPrice = formatter.format(response.items[0].price / 100);
      modalCartPrice = formatter.format(response.items_subtotal_price / 100);
      modalCartCount = response.item_count;
      activateAddToCartModal({
        image: modalItemImage,
        vendor: modalItemVendor,
        title: modalItemTitle,
        option: modalItemOption,
        size: modalItemSize,
        quantity: modalAddedQuantity,
        itemQty: modalItemQuantity,
        price: modalItemPrice,
        subtotal: modalCartPrice,
        cart: modalCartCount
      });

      updateCartQuantity(response.item_count);
    });
  }).catch(error => {
    console.error('Error: ', error);
  });

  if (typeof item !== 'undefined' && typeof window._learnq !== 'undefined') {
    _learnq.push(['track', 'Added to Cart', item]);
  }
}

export { AddToCartModal };
