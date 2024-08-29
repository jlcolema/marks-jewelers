export default function breadReplace() {
  const waitForContent = setInterval(() => {
    const breadPlacement = document.querySelector('#bread-checkout-btn-product > div > a');
    clearInterval(waitForContent);
    if (breadPlacement) {
      breadPlacement.textContent = `Or ${breadPlacement.textContent.toLowerCase()} through Bread Pay`;
    }
  }, 2300);
}
