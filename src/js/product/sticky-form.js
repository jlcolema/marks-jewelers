export default function stickyForm() {
  const stickyBox = document.querySelector('.product-sticky-form');
  const addStickyForm = function stickyScrollFunc() {
    const y = window.scrollY;
    if (y >= 700) {
      stickyBox.classList.add('show');
    } else {
      stickyBox.classList.remove('show');
    }
  };
  window.addEventListener('scroll', addStickyForm);
}
