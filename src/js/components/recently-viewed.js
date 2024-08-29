class RecentlyViewed {
  constructor(element) {
    this.element = element;
    this.template = this.element.dataset.template;
    if (!this.element.textContent.toLowerCase().includes('recently')) {
      this.productData = this.template === 'product' ? JSON.parse(this.element.textContent) : null;
    }
    this.fullContent = this.element.querySelector('.recently-viewed__items--container');
    this.localViewed = localStorage.recentlyViewedProduct;
    this.strings = window.Shopify?.theme?.strings || undefined;

    const pageTitleElem = document.querySelector('.product-page .product-page__title');

    if (this.template === 'product' && this.productData) {
      if (pageTitleElem && !pageTitleElem.textContent.toLowerCase().trim().includes('personalized skinny charm bangle')) {
        this.setRecentlyViewedProducts();
      }
    }

    if (this.localViewed && this.fullContent) {
      this.getRecentlyViewedProducts();
    }
  }

  setRecentlyViewedProducts() {
    const productList = [];
    let jsonResp;
    let jsonRespArr;
    let jsonRespArrStr;
    const numberOfProducts = 4;
    productList.push(this.productData);
    const currProductPageTitle = this.productData.productTitle;
    const productDataString = JSON.stringify(productList);
    const localData = localStorage.getItem('recentlyViewedProduct');

    if (localData === null) {
      localStorage.setItem('recentlyViewedProduct', productDataString);
    } else if (localData) {
      const oldProductData = localStorage.getItem('recentlyViewedProduct');
      const countProductData = (oldProductData.match(/productTitle/g) || []).length;
      const sameProduct = oldProductData.includes(currProductPageTitle);
      if (sameProduct) {
        jsonResp = JSON.parse(oldProductData);
        for (let i = 0; i < jsonResp.length; i++) {
          if (jsonResp[i].productTitle === currProductPageTitle
            && jsonResp[i].variantId !== this.productData.variantId) {
            jsonResp[i].variantId = this.productData.variantId;
            jsonResp[i].productPrice = this.productData.productPrice;
            jsonResp[i].productImg = this.productData.productImg;
            jsonResp[i].productUrl = this.productData.productUrl;
          }
        }
        jsonRespArrStr = JSON.stringify(jsonResp);
        localStorage.setItem('recentlyViewedProduct', jsonRespArrStr);
      } else if (countProductData < numberOfProducts) {
        jsonResp = JSON.parse(oldProductData);
        jsonRespArr = jsonResp.concat(productList);
        jsonRespArrStr = JSON.stringify(jsonRespArr);
        localStorage.setItem('recentlyViewedProduct', jsonRespArrStr);
      } else if (countProductData >= numberOfProducts) {
        jsonResp = JSON.parse(oldProductData);
        jsonResp.shift();
        jsonRespArr = jsonResp.concat(productList);
        jsonRespArrStr = JSON.stringify(jsonRespArr);
        localStorage.setItem('recentlyViewedProduct', jsonRespArrStr);
      }
    }
  }

  getRecentlyViewedProducts() {
    const productData = JSON.parse(this.localViewed);
    const recentlyViewedHtml = [];
    productData.map(item => {
      const buttonMarkup = item.variantId
        ? `<a class="btn" href="/cart/add?id=${item.variantId}">${this.strings?.addToCart}</a>`
        : `<div class="btn btn--disabled">${this.strings?.soldOut}</div>`;

      recentlyViewedHtml.unshift(`
        <li class="recently-viewed__item">
          <a class="recently-viewed__item--link" href="${item.productUrl}">
            <div class="recently-viewed__image" style="background-image: url(${item.productImg})"></div>
            <h3 class="recently-viewed__title">${item.productTitle}</h3>
          </a>
          <p class="recently-viewed__price">From: ${item.productPrice}</p>
          ${buttonMarkup}
        </li>`);
    });
    const newProductData = recentlyViewedHtml.join('');
    this.fullContent.innerHTML = newProductData;
    this.element.classList.remove('hide');
  }
}

export default RecentlyViewed;
