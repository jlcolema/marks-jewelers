export default function removeUspFromHandbags() {
  // eslint-disable-next-line no-undef
  if (productType.toLowerCase() === 'luxury handbags') {
    document.querySelectorAll('.product-page__props').forEach(elem => {
      elem.classList.add('hidden');
    });
  }
}
