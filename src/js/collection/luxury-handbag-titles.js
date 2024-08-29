export default function luxuryHandbagTitles() {
  if (window.location.href.includes('/luxury-handbags')) {
    const designerArray = [];

    document.querySelectorAll('#FacetsWrapperDesktop details summary span')
      .forEach(elem => {
        if (elem.textContent === 'Designer') {
          elem.closest('details')
            .querySelectorAll('.facets__display .facets__item')
            .forEach(item => {
              designerArray.push(item.textContent.split('(')[0].trim());
            });
        }
      });

    document.querySelectorAll('.card__heading a')
      .forEach(elem => {
        designerArray.forEach(item => {
          if (elem.textContent.includes(item)) {
            elem.textContent = elem.textContent.replace(item, '');
          }
        });
      });
  }
}
