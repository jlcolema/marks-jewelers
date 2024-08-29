export default function promoBanners() {
  if (document.querySelector('.activeFilters__wrap > facet-remove')) return;

  function placeDesktopPromoCard(image, link, page, row, begin, end, cardClass) {
    if (window.innerWidth <= 990) return;

    if (!image || !page || !row || !begin || !end) return;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pageParam = urlParams.get('page');

    if (parseInt(page, 10) !== parseInt(pageParam, 10)) return;

    const promoCard = document.createElement('a');
    promoCard.classList.add('promo__card', 'grid__item', cardClass);
    promoCard.style.backgroundImage = `url(${image})`;
    promoCard.style.gridColumn = `${parseInt(begin, 10)}/${parseInt(end, 10) + 1}`;
    promoCard.style.gridRow = `${parseInt(row, 10)}/${parseInt(row, 10)}`;
    promoCard.setAttribute('href', link);

    document.querySelectorAll('#product-grid .grid__item')[0].before(promoCard);
  }

  /* eslint-disable */

  placeDesktopPromoCard(
    desktopPromoCardOneImgURL,
    desktopPromoCardOneURL,
    desktopPromoCardOnePage,
    desktopPromoCardOneRow,
    desktopPromoCardOneBegin,
    desktopPromoCardOneEnd,
    desktopPromoCardOneClass,
  );

  placeDesktopPromoCard(
    desktopPromoCardTwoImgURL,
    desktopPromoCardTwoURL,
    desktopPromoCardTwoPage,
    desktopPromoCardTwoRow,
    desktopPromoCardTwoBegin,
    desktopPromoCardTwoEnd,
    desktopPromoCardTwoClass,
  );

  placeDesktopPromoCard(
    desktopPromoCardThreeImgURL,
    desktopPromoCardThreeURL,
    desktopPromoCardThreePage,
    desktopPromoCardThreeRow,
    desktopPromoCardThreeBegin,
    desktopPromoCardThreeEnd,
    desktopPromoCardThreeClass,
  );

  placeDesktopPromoCard(
    desktopPromoCardFourImgURL,
    desktopPromoCardFourURL,
    desktopPromoCardFourPage,
    desktopPromoCardFourRow,
    desktopPromoCardFourBegin,
    desktopPromoCardFourEnd,
    desktopPromoCardFourClass,
  );

  /* eslint-enable */

  function placeDesktopPromoBanner(image, link, page, row, bannerClass) {
    if (window.innerWidth <= 990) return;

    if (!image || !page || !row) return;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pageParam = urlParams.get('page');

    if (parseInt(page, 10) !== parseInt(pageParam, 10)) return;

    const promoBanner = document.createElement('a');
    promoBanner.classList.add('wide__item', bannerClass);
    promoBanner.style.backgroundImage = `url(${image})`;
    promoBanner.style.gridRow = `${row}/${row}`;
    promoBanner.setAttribute('href', link);

    document.querySelectorAll('#product-grid .grid__item')[0].after(promoBanner);
  }

  /* eslint-disable */

  placeDesktopPromoBanner(
    desktopPromoBannerOneImgURL,
    desktopPromoBannerOneURL,
    desktopPromoBannerOnePage,
    desktopPromoBannerOneRow,
    desktopPromoBannerOneClass,
  );

  placeDesktopPromoBanner(
    desktopPromoBannerTwoImgURL,
    desktopPromoBannerTwoURL,
    desktopPromoBannerTwoPage,
    desktopPromoBannerTwoRow,
    desktopPromoBannerTwoClass,
  );

  placeDesktopPromoBanner(
    desktopPromoBannerThreeImgURL,
    desktopPromoBannerThreeURL,
    desktopPromoBannerThreePage,
    desktopPromoBannerThreeRow,
    desktopPromoBannerThreeClass,
  );

  placeDesktopPromoBanner(
    desktopPromoBannerFourImgURL,
    desktopPromoBannerFourURL,
    desktopPromoBannerFourPage,
    desktopPromoBannerFourRow,
    desktopPromoBannerFourClass,
  );

  /* eslint-enable */

  function placeMobilePromoCard(image, link, page, row, position, cardClass) {
    if (window.innerWidth >= 991) return;

    if (!image || !page || !row || !position) return;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pageParam = urlParams.get('page');

    if (parseInt(page, 10) !== parseInt(pageParam, 10)) return;

    const promoCard = document.createElement('a');
    promoCard.classList.add('promo__card-mobile', 'grid__item', cardClass);
    promoCard.style.backgroundImage = `url(${image})`;
    promoCard.style.gridColumn = `${parseInt(position, 10)}/${parseInt(position, 10)}`;
    promoCard.style.gridRow = `${parseInt(row, 10)}/${parseInt(row, 10)}`;
    promoCard.setAttribute('href', link);

    document.querySelectorAll('#product-grid .grid__item')[0].before(promoCard);
  }

  /* eslint-disable */

  placeMobilePromoCard(
    mobilePromoCardOneImgURL,
    mobilePromoCardOneURL,
    mobilePromoCardOnePage,
    mobilePromoCardOneRow,
    mobilePromoCardOnePosition,
    mobilePromoCardOneClass,
  );

  placeMobilePromoCard(
    mobilePromoCardTwoImgURL,
    mobilePromoCardTwoURL,
    mobilePromoCardTwoPage,
    mobilePromoCardTwoRow,
    mobilePromoCardTwoPosition,
    mobilePromoCardTwoClass,
  );

  placeMobilePromoCard(
    mobilePromoCardThreeImgURL,
    mobilePromoCardThreeURL,
    mobilePromoCardThreePage,
    mobilePromoCardThreeRow,
    mobilePromoCardThreePosition,
    mobilePromoCardThreeClass,
  );

  placeMobilePromoCard(
    mobilePromoCardFourImgURL,
    mobilePromoCardFourURL,
    mobilePromoCardFourPage,
    mobilePromoCardFourRow,
    mobilePromoCardFourPosition,
    mobilePromoCardFourClass,
  );

  /* eslint-enable */

  function placeMobilePromoBanner(image, link, page, row, bannerClass) {
    if (window.innerWidth >= 991) return;

    if (!image || !page || !row) return;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pageParam = urlParams.get('page');

    if (parseInt(page, 10) !== parseInt(pageParam, 10)) return;

    const promoBanner = document.createElement('a');
    promoBanner.classList.add('wide__item-mobile', bannerClass);
    promoBanner.style.backgroundImage = `url(${image})`;
    promoBanner.style.gridRow = `${row}/${row}`;
    promoBanner.setAttribute('href', link);

    document.querySelectorAll('#product-grid .grid__item')[0].after(promoBanner);
  }

  /* eslint-disable */

  placeMobilePromoBanner(
    mobilePromoBannerOneImgURL,
    mobilePromoBannerOneURL,
    mobilePromoBannerOnePage,
    mobilePromoBannerOneRow,
    mobilePromoBannerOneClass,
  );

  placeMobilePromoBanner(
    mobilePromoBannerTwoImgURL,
    mobilePromoBannerTwoURL,
    mobilePromoBannerTwoPage,
    mobilePromoBannerTwoRow,
    mobilePromoBannerTwoClass,
  );

  placeMobilePromoBanner(
    mobilePromoBannerThreeImgURL,
    mobilePromoBannerThreeURL,
    mobilePromoBannerThreePage,
    mobilePromoBannerThreeRow,
    mobilePromoBannerThreeClass,
  );

  placeMobilePromoBanner(
    mobilePromoBannerFourImgURL,
    mobilePromoBannerFourURL,
    mobilePromoBannerFourPage,
    mobilePromoBannerFourRow,
    mobilePromoBannerFourClass,
  );

  /* eslint-enable */
}
