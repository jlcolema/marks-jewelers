export default function setPageId() {
  let currentPage = 1;

  if (!window.location.href.includes('page=')) {
    if (document.querySelector('.pagination__item--current')) {
      currentPage = document.querySelector('.pagination__item--current')
        .textContent
        .trim();
    }

    const nextTitle = document.getElementsByTagName('title')[0].innerHTML.replace('\n', ' ');
    const nextState = { additionalInformation: 'Updated the URL with JS' };
    let nextURL;

    if (!window.location.href.includes('?')) {
      nextURL = `${window.location.href}?page=${currentPage}`;
    } else {
      nextURL = `${window.location.href}&page=${currentPage}`;
    }
    window.history.replaceState(nextState, nextTitle, nextURL);
  }
}
