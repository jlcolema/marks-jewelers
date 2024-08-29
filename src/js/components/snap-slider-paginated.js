import { debounce } from '../utils';

class PaginatedSnapSlider {
  constructor(element) {
    this.slider = element;
    this.config();
    this.mount();
  }

  config() {
    this.container = this.slider.parentNode;
    this.items = [...this.slider.querySelectorAll('.snap-slider__item')];
    this.pagination = this.container.querySelector('.snap-slider__pagination');
    this.paginationItems = [...this.container.querySelectorAll('.snap-slider__pagination-dot')];
    this.activeCls = 'snap-slider__pagination-dot--active';
    this.currentIndex = 0;
    this.width = this.slider.offsetWidth; // Width of the slider
    this.scrollWidth = this.slider.scrollWidth; // Width of the slider track in total
    this.handleScroll = this.handleScroll.bind(this);
  }

  mount() {
    this.bindEvents();

    // Create intersection observer for slider items so we can match them to dots
    this.scrollObserver = new IntersectionObserver(
      this.observeScroll.bind(this),
      { root: this.slider, threshold: 0.5 }
    );

    // Create resize observer to recalculate positioning on resize
    this.resizeObserver = new ResizeObserver(
      debounce(this.observeResize.bind(this), 250)
    );

    // Init observers on elements
    this.bindObservers();
  }

  unmount() {
    this.unbindEvents();
    this.unbindObservers();
  }

  bindEvents() {
    this.pagination.addEventListener('click', this.handleScroll);
  }

  unbindEvents() {
    this.pagination.removeEventListener('click', this.handleScroll);
  }

  bindObservers() {
    this.items.forEach(item => this.scrollObserver.observe(item));
    this.resizeObserver.observe(this.slider);
  }

  unbindObservers() {
    this.items.forEach(item => this.scrollObserver.unobserve(item));
    this.resizeObserver.unobserve(this.slider);
  }

  handleScroll(event) {
    // Get index of pagination dot by finding the event target in our array
    const goTo = this.paginationItems.indexOf(event.target);
    if (goTo < 0 || goTo === this.currentIndex) return;

    // Calculate the difference between the current slide and the slide
    // we want to go to. Set whether we need to go left or right if the
    // new slide index is greater than the current one.
    const scrollAmt = Math.abs(goTo > this.currentIndex ? -1 : 1) * (goTo - this.currentIndex);
    this.slider.scrollBy({ top: 0, left: scrollAmt * (this.width), behavior: 'smooth' });

    // Set new current index
    this.currentIndex = goTo;
  }

  observeScroll(entries) {
    entries.forEach(entry => {
      const index = this.items.indexOf(entry.target);
      this.paginationItems[index].classList.toggle(this.activeCls, entry.isIntersecting);
    });
  }

  observeResize() {
    this.width = this.slider.offsetWidth;
    this.scrollWidth = this.slider.scrollWidth;
    this.slider.scrollBy({ top: 0, left: -this.scrollWidth });
  }
}

export default PaginatedSnapSlider;
