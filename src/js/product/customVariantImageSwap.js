export default function customVariantImageSwap() {
  // updates content in sticky banner to match product variant data
  function stickyMod() {
    const stickyTarget = document.querySelector('.product-sticky-form');
    const stickyObserver = new MutationObserver(() => {
      if (!document.querySelector('.gpo-container')) return;

      // updates sticky header price when any select value is changed
      document.querySelectorAll('.gpo-select select')
        .forEach(elem => {
          if (elem.classList.contains('change-applied')) return;
          elem.classList.add('change-applied');
          elem.addEventListener('change', () => {
            const priceTarget = document.querySelector('.product-page__top');
            const priceObserver = new MutationObserver(() => {
              priceObserver.disconnect();
              document.querySelector('.sticky-price').textContent = document.querySelector('.product-page__price').textContent;
            });
            priceObserver.observe(priceTarget, {
              subtree: true,
              childList: true,
            });
          });
        });

      // replaces Add To Cart button with one that adds the correct variant items
      if (stickyTarget.querySelector('.sticky-add-cart .btn-add-cart')) {
        if (stickyTarget.querySelector('.sticky-add-cart .btn-add-cart')
          .classList
          .contains('clone')) {
          return;
        }

        const addToCartButtonClone = document.querySelector('.sticky-add-cart .btn-add-cart');
        const addToCartButton = document.querySelector('.sticky-add-cart .btn-add-cart')
          .cloneNode(true);

        addToCartButtonClone.classList.add('clone');
        addToCartButtonClone.removeAttribute('data-target');
        addToCartButtonClone.removeAttribute('data-toggle');
        addToCartButtonClone.removeAttribute('data-modal');
        addToCartButtonClone.addEventListener('click', e => {
          e.preventDefault();
          document.querySelector('.gpo-clone-atc-button')
            .click();
        });

        addToCartButton.after(addToCartButtonClone);
        addToCartButton.remove();
      }
    });
    stickyObserver.observe(stickyTarget, {
      subtree: true,
      childList: true,
    });
  }

  // implements custom image swap functionality
  // triggers when a product option selection is made on an item with custom variants
  // currently only supports dropdowns with "change" listeners
  // switch statement utilizes Shopify Product ID as a string
  let target;
  let observer;

  // eslint-disable-next-line no-undef
  switch (productID) {
    // Applies custom image swap function to the item:
    // "M.K. Diamonds & Jewelry Pave Diamond Mini Cuban Link Bracelet"
    case '7839538675934':
      target = document.querySelector('#addToCartForm');
      observer = new MutationObserver(() => {
        if (target.querySelector('select[name="select-metal"]')) {
          observer.disconnect();
          document.querySelector('select[name="select-metal"]')
            .addEventListener('change', e => {
              const selectValue = e.target.value;
              const allImages = document.querySelectorAll('.product-page__medias .next-list li img');
              if (selectValue === 'White Gold') allImages[0].click();
              if (selectValue === 'Rose Gold') allImages[2].click();
              if (selectValue === 'Yellow Gold') allImages[4].click();
            });
        }
      });
      observer.observe(target, {
        subtree: true,
        childList: true,
      });
      stickyMod();
      break;

    // Applies custom image swap function to the item:
    // "Diamond Initial Pendants in White or Yellow Gold"
    case '7839552438494':
      target = document.querySelector('#addToCartForm');
      observer = new MutationObserver(() => {
        if (target.querySelector('select[name="select-metal"]')) {
          observer.disconnect();
          document.querySelectorAll('select[name="select-metal"], select[name="select-letter"]')
            .forEach(elem => elem.addEventListener('change', () => {
              const metalSelectValue = document.querySelector('select[name="select-metal"]').value;
              const letterSelectValue = document.querySelector('select[name="select-letter"]').value;
              const allImages = document.querySelectorAll('.product-page__medias .next-list li img');

              if (metalSelectValue === 'Yellow Gold') {
                if (letterSelectValue === 'A') allImages[34].click();
                if (letterSelectValue === 'B') allImages[40].click();
                if (letterSelectValue === 'C') allImages[42].click();
                if (letterSelectValue === 'D') allImages[48].click();
                if (letterSelectValue === 'E') allImages[44].click();
                if (letterSelectValue === 'F') allImages[53].click();
                if (letterSelectValue === 'G') allImages[41].click();
                if (letterSelectValue === 'H') allImages[50].click();
                if (letterSelectValue === 'I') allImages[52].click();
                if (letterSelectValue === 'J') allImages[38].click();
                if (letterSelectValue === 'K') allImages[49].click();
                if (letterSelectValue === 'L') allImages[43].click();
                if (letterSelectValue === 'M') allImages[45].click();
                if (letterSelectValue === 'N') allImages[0].click();
                if (letterSelectValue === 'O') allImages[27].click();
                if (letterSelectValue === 'P') allImages[47].click();
                if (letterSelectValue === 'Q') allImages[29].click();
                if (letterSelectValue === 'R') allImages[39].click();
                if (letterSelectValue === 'S') allImages[36].click();
                if (letterSelectValue === 'T') allImages[35].click();
                if (letterSelectValue === 'U') allImages[24].click();
                if (letterSelectValue === 'V') allImages[51].click();
                if (letterSelectValue === 'W') allImages[46].click();
                if (letterSelectValue === 'X') allImages[32].click();
                if (letterSelectValue === 'Y') allImages[56].click();
                if (letterSelectValue === 'Z') allImages[31].click();
              }

              if (metalSelectValue === 'White Gold') {
                if (letterSelectValue === 'A') allImages[10].click();
                if (letterSelectValue === 'B') allImages[11].click();
                if (letterSelectValue === 'C') allImages[5].click();
                if (letterSelectValue === 'D') allImages[3].click();
                if (letterSelectValue === 'E') allImages[7].click();
                if (letterSelectValue === 'F') allImages[20].click();
                if (letterSelectValue === 'G') allImages[13].click();
                if (letterSelectValue === 'H') allImages[18].click();
                if (letterSelectValue === 'I') allImages[19].click();
                if (letterSelectValue === 'J') allImages[9].click();
                if (letterSelectValue === 'K') allImages[2].click();
                if (letterSelectValue === 'L') allImages[8].click();
                if (letterSelectValue === 'M') allImages[1].click();
                if (letterSelectValue === 'N') allImages[16].click();
                if (letterSelectValue === 'O') allImages[26].click();
                if (letterSelectValue === 'P') allImages[4].click();
                if (letterSelectValue === 'Q') allImages[28].click();
                if (letterSelectValue === 'R') allImages[15].click();
                if (letterSelectValue === 'S') allImages[12].click();
                if (letterSelectValue === 'T') allImages[17].click();
                if (letterSelectValue === 'U') allImages[23].click();
                if (letterSelectValue === 'V') allImages[21].click();
                if (letterSelectValue === 'W') allImages[6].click();
                if (letterSelectValue === 'X') allImages[33].click();
                if (letterSelectValue === 'Y') allImages[22].click();
                if (letterSelectValue === 'Z') allImages[30].click();
              }
            }));
        }
      });
      observer.observe(target, {
        subtree: true,
        childList: true,
      });
      stickyMod();
      break;

    // Applies custom image swap function to the item:
    // "Oval Semi Precious Pendant with Diamond Accents in White Gold"
    case '7874475819230':
      target = document.querySelector('#addToCartForm');
      observer = new MutationObserver(() => {
        if (target.querySelector('select[name="select-birth"]')) {
          observer.disconnect();
          document.querySelector('select[name="select-birth"]')
            .addEventListener('change', e => {
              const selectValue = e.target.value;
              const allImages = document.querySelectorAll('.product-page__medias .next-list li img');
              if (selectValue.includes('Aquamarine')) allImages[0].click();
              if (selectValue.includes('Garnet')) allImages[2].click();
              if (selectValue.includes('Citrine')) allImages[3].click();
              if (selectValue.includes('Ruby')) allImages[4].click();
              if (selectValue.includes('Amethyst')) allImages[5].click();
              if (selectValue.includes('Emerald')) allImages[6].click();
              if (selectValue.includes('Opal')) allImages[7].click();

              if (selectValue.includes('Diamond')) allImages[1].click();
              if (selectValue.includes('Alexandrite')) allImages[1].click();
              if (selectValue.includes('Peridot')) allImages[1].click();
              if (selectValue.includes('Sapphire')) allImages[1].click();
              if (selectValue.includes('Blue Topaz')) allImages[1].click();
            });
        }
      });
      observer.observe(target, {
        subtree: true,
        childList: true,
      });
      stickyMod();
      break;

    // Applies custom image swap function to the item:
    // "Sterling Silver Diamond Accented and Lab Created Ruby Heart Pendant"
    case '7881324134622':
      target = document.querySelector('#addToCartForm');
      observer = new MutationObserver(() => {
        if (target.querySelector('select[name="select-birth"]')) {
          observer.disconnect();
          document.querySelector('select[name="select-birth"]')
            .addEventListener('change', e => {
              const selectValue = e.target.value;
              const allImages = document.querySelectorAll('.product-page__medias .next-list li img');
              if (selectValue.includes('Diamond')) allImages[1].click();
              if (selectValue.includes('Opal')) allImages[2].click();
              if (selectValue.includes('Emerald')) allImages[3].click();
              if (selectValue.includes('Sapphire')) allImages[4].click();
              if (selectValue.includes('Garnet')) allImages[5].click();
              if (selectValue.includes('Amethyst')) allImages[6].click();
              if (selectValue.includes('Citrine')) allImages[7].click();
              if (selectValue.includes('Aquamarine')) allImages[9].click();
              if (selectValue.includes('Opal')) allImages[10].click();
              if (selectValue.includes('Peridot')) allImages[11].click();
              if (selectValue.includes('Ruby')) allImages[12].click();

              if (selectValue.includes('Alexandrite')) allImages[0].click();
              if (selectValue.includes('Blue Topaz')) allImages[0].click();
            });
        }
      });
      observer.observe(target, {
        subtree: true,
        childList: true,
      });
      stickyMod();
      break;

    // Applies custom image swap function to the item:
    // "Round Amethyst 0.65 ct & Diamond Halo 0.10 ctw Twist Ring in Sterling Silver"
    case '7876417716446':
      target = document.querySelector('#addToCartForm');
      observer = new MutationObserver(() => {
        if (target.querySelector('select[name="select-birth"]')) {
          observer.disconnect();
          document.querySelector('select[name="select-birth"]')
            .addEventListener('change', e => {
              const selectValue = e.target.value;
              const allImages = document.querySelectorAll('.product-page__medias .next-list li img');
              if (selectValue.includes('Garnet')) allImages[0].click();
              if (selectValue.includes('Ruby')) allImages[0].click();
              if (selectValue.includes('Amethyst')) allImages[1].click();
              if (selectValue.includes('Aquamarine')) allImages[2].click();
              if (selectValue.includes('Diamond')) allImages[3].click();
              if (selectValue.includes('Pearl')) allImages[4].click();
              if (selectValue.includes('Emerald')) allImages[5].click();
              if (selectValue.includes('Alexandrite')) allImages[6].click();
              if (selectValue.includes('Peridot')) allImages[7].click();
              if (selectValue.includes('Sapphire')) allImages[8].click();
              if (selectValue.includes('Opal')) allImages[9].click();
              if (selectValue.includes('Citrine')) allImages[10].click();
              if (selectValue.includes('Blue Topaz')) allImages[11].click();
              if (selectValue.includes('Ruby')) allImages[0].click();
            });
        }
      });
      observer.observe(target, {
        subtree: true,
        childList: true,
      });
      stickyMod();
      break;

    // Applies custom image swap function to the item:
    // "Round Amethyst 5.2 mm & Diamond Halo 0.16 ctw Earrings in Sterling Silver"
    case '7876490887390':
      target = document.querySelector('#addToCartForm');
      observer = new MutationObserver(() => {
        if (target.querySelector('select[name="select-birth"]')) {
          observer.disconnect();
          document.querySelector('select[name="select-birth"]')
            .addEventListener('change', e => {
              const selectValue = e.target.value;
              const allImages = document.querySelectorAll('.product-page__medias .next-list li img');
              if (selectValue.includes('Garnet')) allImages[2].click();
              if (selectValue.includes('Amethyst')) allImages[0].click();
              if (selectValue.includes('Citrine')) allImages[1].click();
              if (selectValue.includes('Ruby')) allImages[2].click();
              if (selectValue.includes('Aquamarine')) allImages[3].click();
              if (selectValue.includes('Diamond')) allImages[4].click();
              if (selectValue.includes('Peridot')) allImages[5].click();
              if (selectValue.includes('Pearl')) allImages[6].click();
              if (selectValue.includes('Blue Topaz')) allImages[7].click();
            });
        }
      });
      observer.observe(target, {
        subtree: true,
        childList: true,
      });
      stickyMod();
      break;

    // Applies custom image swap function to the item:
    // "Diamond 0.04 ctw Halo Pendants in White Gold"
    case '7876511334622':
      target = document.querySelector('#addToCartForm');
      observer = new MutationObserver(() => {
        if (target.querySelector('select[name="select-center-type"]')) {
          observer.disconnect();
          document.querySelector('select[name="select-center-type"]')
            .addEventListener('change', e => {
              const selectValue = e.target.value;
              const allImages = document.querySelectorAll('.product-page__medias .next-list li img');
              if (selectValue.includes('Sapphire')) allImages[2].click();
              if (selectValue.includes('Ruby')) allImages[1].click();
              if (selectValue.includes('Emerald')) allImages[0].click();
            });
        }
      });
      observer.observe(target, {
        subtree: true,
        childList: true,
      });
      stickyMod();
      break;

    // Applies custom image swap function to the item:
    // "10K Diamond And Gemstone Mixable & Stackable Rings (Channel)"
    case '7838412144862':
      target = document.querySelector('#addToCartForm');
      observer = new MutationObserver(() => {
        if (target.querySelector('select[name="select-material"]')) {
          observer.disconnect();
          document.querySelectorAll('select[name="select-material"], select[name="select-color"]')
            .forEach(elem => elem.addEventListener('change', () => {
              const materialSelectValue = document.querySelector('select[name="select-material"]').value;
              const colorSelectValue = document.querySelector('select[name="select-color"]').value;
              const allImages = document.querySelectorAll('.product-page__medias .next-list li img');

              if (materialSelectValue === '10K Yellow Gold') {
                if (colorSelectValue === 'Garnet') allImages[11].click();
                if (colorSelectValue === 'Amethyst') allImages[12].click();
                if (colorSelectValue === 'Emerald') allImages[13].click();
                if (colorSelectValue === 'Sapphire') allImages[15].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[16].click();
                if (colorSelectValue === 'Peridot') allImages[17].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[18].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[19].click();
                if (colorSelectValue === 'Citrine') allImages[20].click();
                if (colorSelectValue === 'Aquamarine') allImages[21].click();
                if (colorSelectValue === 'Ruby') allImages[11].click();
                if (colorSelectValue === 'Blue Topaz') allImages[15].click();
              }

              if (materialSelectValue === '10K White Gold') {
                if (colorSelectValue === 'Garnet') allImages[0].click();
                if (colorSelectValue === 'Amethyst') allImages[1].click();
                if (colorSelectValue === 'Emerald') allImages[2].click();
                if (colorSelectValue === 'Sapphire') allImages[4].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[5].click();
                if (colorSelectValue === 'Peridot') allImages[6].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[7].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[8].click();
                if (colorSelectValue === 'Citrine') allImages[9].click();
                if (colorSelectValue === 'Aquamarine') allImages[10].click();
                if (colorSelectValue === 'Ruby') allImages[0].click();
                if (colorSelectValue === 'Blue Topaz') allImages[4].click();
              }

              if (materialSelectValue === '10K Rose Gold') {
                if (colorSelectValue === 'Garnet') allImages[22].click();
                if (colorSelectValue === 'Amethyst') allImages[23].click();
                if (colorSelectValue === 'Emerald') allImages[25].click();
                if (colorSelectValue === 'Sapphire') allImages[27].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[28].click();
                if (colorSelectValue === 'Peridot') allImages[29].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[30].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[31].click();
                if (colorSelectValue === 'Citrine') allImages[32].click();
                if (colorSelectValue === 'Aquamarine') allImages[33].click();
                if (colorSelectValue === 'Ruby') allImages[22].click();
                if (colorSelectValue === 'Blue Topaz') allImages[27].click();
              }
            }));
        }
      });
      observer.observe(target, {
        subtree: true,
        childList: true,
      });
      stickyMod();
      break;

    // Applies custom image swap function to the item:
    // "10K Diamond And Gemstone Mixable & Stackable Rings (Diamond)"
    case '7838533681374':
      target = document.querySelector('#addToCartForm');
      observer = new MutationObserver(() => {
        if (target.querySelector('select[name="select-material"]')) {
          observer.disconnect();
          document.querySelectorAll('select[name="select-material"], select[name="select-color"]')
            .forEach(elem => elem.addEventListener('change', () => {
              const materialSelectValue = document.querySelector('select[name="select-material"]').value;
              const colorSelectValue = document.querySelector('select[name="select-color"]').value;
              const allImages = document.querySelectorAll('.product-page__medias .next-list li img');

              if (materialSelectValue === '10K Yellow Gold') {
                if (colorSelectValue === 'Amethyst') allImages[12].click();
                if (colorSelectValue === 'Emerald') allImages[13].click();
                if (colorSelectValue === 'Sapphire') allImages[14].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[15].click();
                if (colorSelectValue === 'Peridot') allImages[16].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[17].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[18].click();
                if (colorSelectValue === 'Citrine') allImages[19].click();
                if (colorSelectValue === 'Aquamarine') allImages[20].click();
                if (colorSelectValue === 'Garnet') allImages[15].click();
                if (colorSelectValue === 'Ruby') allImages[15].click();
                if (colorSelectValue === 'Blue Topaz') allImages[14].click();
              }

              if (materialSelectValue === '10K White Gold') {
                if (colorSelectValue === 'Garnet') allImages[0].click();
                if (colorSelectValue === 'Amethyst') allImages[1].click();
                if (colorSelectValue === 'Emerald') allImages[2].click();
                if (colorSelectValue === 'Sapphire') allImages[3].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[4].click();
                if (colorSelectValue === 'Peridot') allImages[5].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[6].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[7].click();
                if (colorSelectValue === 'Citrine') allImages[8].click();
                if (colorSelectValue === 'Aquamarine') allImages[10].click();
                if (colorSelectValue === 'Ruby') allImages[11].click();
                if (colorSelectValue === 'Blue Topaz') allImages[3].click();
              }

              if (materialSelectValue === '10K Rose Gold') {
                if (colorSelectValue === 'Garnet') allImages[21].click();
                if (colorSelectValue === 'Amethyst') allImages[22].click();
                if (colorSelectValue === 'Emerald') allImages[23].click();
                if (colorSelectValue === 'Sapphire') allImages[24].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[25].click();
                if (colorSelectValue === 'Peridot') allImages[26].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[27].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[27].click();
                if (colorSelectValue === 'Citrine') allImages[28].click();
                if (colorSelectValue === 'Aquamarine') allImages[29].click();
                if (colorSelectValue === 'Ruby') allImages[21].click();
                if (colorSelectValue === 'Blue Topaz') allImages[24].click();
              }
            }));
        }
      });
      observer.observe(target, {
        subtree: true,
        childList: true,
      });
      stickyMod();
      break;

    // Applies custom image swap function to the item:
    // "10K Diamond And Gemstone Mixable & Stackable Rings (Hearts)"
    case '7838289494238':
      target = document.querySelector('#addToCartForm');
      observer = new MutationObserver(() => {
        if (target.querySelector('select[name="material-select"]')) {
          observer.disconnect();
          document.querySelectorAll('select[name="material-select"], select[name="gemstone-select"]')
            .forEach(elem => elem.addEventListener('change', () => {
              const materialSelectValue = document.querySelector('select[name="material-select"]').value;
              const colorSelectValue = document.querySelector('select[name="gemstone-select"]').value;
              const allImages = document.querySelectorAll('.product-page__medias .next-list li img');

              if (materialSelectValue === '10K Yellow Gold') {
                if (colorSelectValue === 'Garnet') allImages[14].click();
                if (colorSelectValue === 'Amethyst') allImages[15].click();
                if (colorSelectValue === 'Emerald') allImages[16].click();
                if (colorSelectValue === 'Sapphire') allImages[17].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[18].click();
                if (colorSelectValue === 'Peridot') allImages[19].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[20].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[21].click();
                if (colorSelectValue === 'Citrine') allImages[22].click();
                if (colorSelectValue === 'Aquamarine') allImages[23].click();
                if (colorSelectValue === 'Ruby') allImages[24].click();
                if (colorSelectValue === 'Blue Topaz') allImages[17].click();
              }

              if (materialSelectValue === '10K White Gold') {
                if (colorSelectValue === 'Garnet') allImages[0].click();
                if (colorSelectValue === 'Amethyst') allImages[2].click();
                if (colorSelectValue === 'Emerald') allImages[3].click();
                if (colorSelectValue === 'Sapphire') allImages[4].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[5].click();
                if (colorSelectValue === 'Peridot') allImages[6].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[7].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[8].click();
                if (colorSelectValue === 'Citrine') allImages[9].click();
                if (colorSelectValue === 'Aquamarine') allImages[10].click();
                if (colorSelectValue === 'Ruby') allImages[11].click();
                if (colorSelectValue === 'Blue Topaz') allImages[4].click();
              }

              if (materialSelectValue === '10K Rose Gold') {
                if (colorSelectValue === 'Garnet') allImages[25].click();
                if (colorSelectValue === 'Amethyst') allImages[26].click();
                if (colorSelectValue === 'Emerald') allImages[28].click();
                if (colorSelectValue === 'Sapphire') allImages[29].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[30].click();
                if (colorSelectValue === 'Peridot') allImages[31].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[32].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[33].click();
                if (colorSelectValue === 'Citrine') allImages[34].click();
                if (colorSelectValue === 'Aquamarine') allImages[35].click();
                if (colorSelectValue === 'Ruby') allImages[36].click();
                if (colorSelectValue === 'Blue Topaz') allImages[29].click();
              }
            }));
        }
      });
      observer.observe(target, {
        subtree: true,
        childList: true,
      });
      stickyMod();
      break;

    // Applies custom image swap function to the item:
    // "10K Diamond And Gemstone Mixable & Stackable Rings (Square)"
    case '7838516052190':
      target = document.querySelector('#addToCartForm');
      observer = new MutationObserver(() => {
        if (target.querySelector('select[name="material-select"]')) {
          observer.disconnect();
          document.querySelectorAll('select[name="material-select"], select[name="gemstone-select"]')
            .forEach(elem => elem.addEventListener('change', () => {
              const materialSelectValue = document.querySelector('select[name="material-select"]').value;
              const colorSelectValue = document.querySelector('select[name="gemstone-select"]').value;
              const allImages = document.querySelectorAll('.product-page__medias .next-list li img');

              if (materialSelectValue === '10K Yellow Gold') {
                if (colorSelectValue === 'Garnet') allImages[11].click();
                if (colorSelectValue === 'Amethyst') allImages[12].click();
                if (colorSelectValue === 'Emerald') allImages[13].click();
                if (colorSelectValue === 'Sapphire') allImages[15].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[16].click();
                if (colorSelectValue === 'Peridot') allImages[17].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[18].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[18].click();
                if (colorSelectValue === 'Citrine') allImages[19].click();
                if (colorSelectValue === 'Aquamarine') allImages[20].click();
                if (colorSelectValue === 'Ruby') allImages[11].click();
                if (colorSelectValue === 'Blue Topaz') allImages[15].click();
              }

              if (materialSelectValue === '10K White Gold') {
                if (colorSelectValue === 'Garnet') allImages[0].click();
                if (colorSelectValue === 'Amethyst') allImages[1].click();
                if (colorSelectValue === 'Emerald') allImages[2].click();
                if (colorSelectValue === 'Sapphire') allImages[4].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[5].click();
                if (colorSelectValue === 'Peridot') allImages[6].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[7].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[8].click();
                if (colorSelectValue === 'Citrine') allImages[9].click();
                if (colorSelectValue === 'Aquamarine') allImages[10].click();
                if (colorSelectValue === 'Ruby') allImages[0].click();
                if (colorSelectValue === 'Blue Topaz') allImages[4].click();
              }

              if (materialSelectValue === '10K Rose Gold') {
                if (colorSelectValue === 'Garnet') allImages[21].click();
                if (colorSelectValue === 'Amethyst') allImages[22].click();
                if (colorSelectValue === 'Emerald') allImages[23].click();
                if (colorSelectValue === 'Sapphire') allImages[25].click();
                if (colorSelectValue === 'Synthetic Alexandrite') allImages[26].click();
                if (colorSelectValue === 'Peridot') allImages[27].click();
                if (colorSelectValue === 'Pink Sapphire') allImages[28].click();
                if (colorSelectValue === 'Pink Tourmaline') allImages[28].click();
                if (colorSelectValue === 'Citrine') allImages[29].click();
                if (colorSelectValue === 'Aquamarine') allImages[30].click();
                if (colorSelectValue === 'Ruby') allImages[21].click();
                if (colorSelectValue === 'Blue Topaz') allImages[25].click();
              }
            }));
        }
      });
      observer.observe(target, {
        subtree: true,
        childList: true,
      });
      stickyMod();
      break;
    // END OF DECLARED CASES
    default:
      stickyMod();
  }
}
