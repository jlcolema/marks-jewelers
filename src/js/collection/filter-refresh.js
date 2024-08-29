export default function filterRefresh() {
  // Refreshes page after clicking a facet checkbox
  if (document.querySelector('label.facet-checkbox')) {
    document.querySelectorAll('label.facet-checkbox')
      .forEach(elem => {
        elem.addEventListener('click', () => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        });
      });
  }

  // Refreshes page after clearing facets
  if (document.querySelector('facet-remove')) {
    document.querySelectorAll('facet-remove')
      .forEach(elem => {
        elem.addEventListener('click', () => {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        });
      });
  }

  // Refreshes page after selection a new sort by filter
  if (document.querySelector('select[name="sort_by"]')) {
    document.querySelectorAll('select[name="sort_by"]')
      .forEach(elem => {
        elem.addEventListener('change', () => {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        });
      });
  }

  // Logic for properly refreshing price facet starts here
  const gteInput = document.querySelector('input[name="filter.v.price.gte"]');
  const lteInput = document.querySelector('input[name="filter.v.price.lte"]');
  let gteInputValue;
  let lteInputValue;

  if (gteInput && lteInput) {
    /* eslint-disable prefer-destructuring */
    gteInput.value = gteInput.value.split('.')[0];
    lteInput.value = lteInput.value.split('.')[0];
    /* eslint-enable prefer-destructuring */

    gteInputValue = document.querySelector('input[name="filter.v.price.gte"]').value;
    lteInputValue = document.querySelector('input[name="filter.v.price.lte"]').value;

    // Executes code when minimum price value is unfocused/blurred
    // Does nothing if maximum price value element is focused next
    // Also does nothing if neither minimum nor maximum values have changed
    gteInput.addEventListener('blur', () => {
      setTimeout(() => {
        if (document.querySelector('#Filter-Price-LTE') === document.activeElement) return;
        if (gteInputValue !== document.querySelector('input[name="filter.v.price.gte"]').value || lteInputValue !== document.querySelector('input[name="filter.v.price.lte"]').value) {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      }, 50);
    });

    // Executes code when maximum price value is unfocused/blurred
    // Does nothing if minimum price value element is focused next
    // Also does nothing if neither minimum nor maximum values have changed
    lteInput.addEventListener('blur', () => {
      setTimeout(() => {
        if (document.querySelector('#Filter-Price-GTE') === document.activeElement) return;
        if (lteInputValue !== document.querySelector('input[name="filter.v.price.lte"]').value || gteInputValue !== document.querySelector('input[name="filter.v.price.gte"]').value) {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      }, 50);
    });
  }
}
