export default function navbarFix() {
  document.addEventListener('scroll', event => {
    if (window.location.href.includes('lagos-fine-jewelry')) {
      if (window.pageYOffset > 3460) {
        document.querySelector('#main-collection-filters')
          .classList
          .add('navbar-fixed');
      }
      if (window.pageYOffset < 3460) {
        document.querySelector('#main-collection-filters')
          .classList
          .remove('navbar-fixed');
      }
    } else {
      if (window.pageYOffset > 215) {
        document.querySelector('#main-collection-filters')
          .classList
          .add('navbar-fixed');
      }
      if (window.pageYOffset < 216) {
        document.querySelector('#main-collection-filters')
          .classList
          .remove('navbar-fixed');
      }
    }
  });
}
