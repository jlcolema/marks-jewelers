class BlogLoadMore {
  constructor(element) {
    this.container = element;
    this.maxPage = document.querySelector('#pages').textContent;
    this.curPage = '1';
    this.nextPage = '2';
    this.loadMore = this.container.querySelector('a.load-more');

    this.loadMoreClick(this.curPage, this.nextPage, this.maxPage, this.loadMore);
  }

  loadMoreClick(curPage, nextPage, maxPage, loadMore) {
    this.loadMore.addEventListener('click', event => {
      event.preventDefault();
      this.loadMore.classList.remove('loaded');
      this.loadMore.textContent = 'Loading';
      const nextUrl = `${location.pathname}?page=${nextPage}`;
      fetch(nextUrl).then(response => response.text()).then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newCards = doc.querySelectorAll('.blog-article-card');
        const cardsContainer = document.querySelector('.blog-article-cards');
        newCards.forEach(card => {
          cardsContainer.insertAdjacentElement('beforeend', card);
        });
        curPage++;
        nextPage++;
        if (curPage == maxPage) {
          loadMore.style.display = 'none';
        } else {
          this.loadMore.classList.add('loaded');
          loadMore.textContent = 'Load More';
        }
      });
    });
  }
}
export default BlogLoadMore;
