export default function filterDisplay() {
  let facetCount = 4;
  if (window.innerWidth < 992) {
    facetCount = 2;
  }
  const productCountElem = document.querySelector('#ProductCountDesktop');
  let totalItems;

  if (productCountElem) {
    // eslint-disable-next-line prefer-destructuring
    totalItems = productCountElem.textContent.split(' ')[0];
  }

  const activeFacetsElem = document.querySelector('.active-facets');
  // Hides "Active Filters" and "Clear All Filters" elements if no filters are applied
  if (!document.querySelector('.activeFilters__wrap > facet-remove') && activeFacetsElem) {
    activeFacetsElem.style.display = 'none';
  }

  // Removes all filter checkboxes that will filter down to zero items
  if (document.querySelector('.list-menu__item.facets__item')) {
    document.querySelectorAll('.list-menu__item.facets__item')
      .forEach(elem => {
        if (elem.querySelector('label')
          .textContent
          .trim()
          .split('(')[1].split(')')[0] === '0') {
          elem.remove();
        }
      });
  }

  let allFacetElems = document.querySelectorAll('details.facets__disclosure');

  if (document.querySelector('details.facets__disclosure')) {
    allFacetElems.forEach(elem => {
      // Removes facet element if it will not filter out any items
      // Only triggers if total items in Collection matches number of items in filter
      if (elem.querySelectorAll('.facet-checkbox').length === 1) {
        const filterItems = elem.querySelector('.facet-checkbox')
          .textContent
          .trim()
          .split('(')[1].replace(')', '');

        if (totalItems === filterItems) {
          elem.remove();
        }
      }

      // Removes Ring Type 2 facet element on all Collections
      if (elem.querySelector('summary span').textContent === 'Ring Type 2') {
        elem.remove();
      }

      // Removes Brand facet element on Luxury Handbags Collection
      if (window.location.pathname.includes('luxury-handbags')
        && elem.querySelector('summary span').textContent === 'Brand') {
        elem.remove();
      }

      if (window.location.pathname.includes('estate')
        && elem.querySelector('summary span').textContent === 'Ring Style') {
        elem.querySelector('summary span').textContent = 'Jewelry Type';
      }
    });

    // Redefining all facets variable after removing and modifying various elements
    allFacetElems = document.querySelectorAll('details.facets__disclosure');

    // Removes all empty facets
    allFacetElems.forEach((elem, i) => {
      if (elem.querySelector('span')
        .textContent
        .toLowerCase() !== 'price' && !elem.querySelectorAll('.facets__item').length) {
        elem.remove();
      }

      if (i >= facetCount) {
        elem.classList.add('hide-facet');
      }

      if (document.querySelectorAll('details.facets__disclosure').length <= facetCount) {
        document.querySelector('.dropdownmenu').style.display = 'none';
      }
    });
  }

  const dropButtonElem = document.querySelector('#dropbutton');

  if (dropButtonElem) {
    dropButtonElem.innerHTML = 'Show More Filters <span class="show-more-glyph">+</span>';

    // Logic to toggle "Show More" and "Show Less" button text starts here
    dropButtonElem.addEventListener('click', e => {
      if (e.target.closest('#dropbutton')
        .textContent
        .toLowerCase()
        .includes('more')) {
        dropButtonElem.innerHTML = 'Show Less Filters <span class="show-less-glyph">-</span>';

        // Redefining all facets variable after removing and modifying various elements
        allFacetElems = document.querySelectorAll('details.facets__disclosure');

        // Shows all facets when "Show More" is clicked
        allFacetElems.forEach((elem, i) => {
          if (i >= facetCount) {
            elem.classList.remove('hide-facet');
          }
        });
      } else {
        dropButtonElem.innerHTML = 'Show More Filters <span class="show-more-glyph">+</span>';

        allFacetElems.forEach((elem, i) => {
          if (i >= facetCount) {
            elem.classList.add('hide-facet');
          }
        });
      }
    });
  }

  const collectionFiltersElem = document.querySelector('#main-collection-filters');

  // Displays the element containing all facets only after all logic has executed
  // The timeout matches the initial transition effect duration
  if (collectionFiltersElem && collectionFiltersElem.classList.contains('start-invis')) {
    setTimeout(() => {
      collectionFiltersElem.classList.remove('start-invis');
    }, 600);
  }
}
