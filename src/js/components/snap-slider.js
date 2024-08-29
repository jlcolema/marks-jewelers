import { debounce } from '../utils';

class SnapSlider {
  constructor(element) {
    this.slider = element;
    this.config();
    this.mount();
  }

  config() {
    this.container = this.slider.parentNode;
    this.items = this.slider.querySelectorAll('.snap-slider__item');
    this.arrows = this.container.querySelector('.snap-slider__arrows');
    this.prevBtn = this.container.querySelector('.snap-slider__arrow--prev');
    this.nextBtn = this.container.querySelector('.snap-slider__arrow--next');
    this.disabledCls = 'snap-slider__arrow--disabled';
    this.width = this.slider.offsetWidth; // Width of the slider
    this.scrollWidth = this.slider.scrollWidth; // Width of the slider track in total
    this.handleScroll = this.handleScroll.bind(this);

    // Visibility state of first and last slider items
    this.intersecting = { first: false, last: false };
  }

  mount() {
    this.bindEvents();

    // Create intersection observer for first and last slider item
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
    this.prevBtn.addEventListener('click', this.handleScroll);
    this.nextBtn.addEventListener('click', this.handleScroll);
  }

  unbindEvents() {
    this.prevBtn.removeEventListener('click', this.handleScroll);
    this.nextBtn.removeEventListener('click', this.handleScroll);
  }

  bindObservers() {
    this.scrollObserver.observe(this.items[0]); // First slider item
    this.scrollObserver.observe(this.items[this.items.length - 1]); // Last slider item
    this.resizeObserver.observe(this.slider);
  }

  unbindObservers() {
    this.scrollObserver.unobserve(this.items[0]);
    this.scrollObserver.unobserve(this.items[this.items.length - 1]);
    this.resizeObserver.unobserve(this.slider);
  }

  handleScroll(event) {
    const dir = event.target.closest('button').hasAttribute('data-prev') ? -1 : 1;
    this.slider.scrollBy({ top: 0, left: dir * (this.width), behavior: 'smooth' });
  }

  observeScroll(entries) {
    entries.forEach(entry => {
      if (entry.target === this.items[0]) {
        this.intersecting.first = entry.isIntersecting;
      }

      if (entry.target === this.items[this.items.length - 1]) {
        this.intersecting.last = entry.isIntersecting;
      }
    });

    this.prevBtn.classList.toggle(this.disabledCls, this.intersecting.first);
    this.nextBtn.classList.toggle(this.disabledCls, this.intersecting.last);
    this.arrows.classList.toggle('invisible', this.intersecting.first && this.intersecting.last);
  }

  observeResize() {
    this.width = this.slider.offsetWidth;
    this.scrollWidth = this.slider.scrollWidth;
    this.slider.scrollBy({ top: 0, left: -this.scrollWidth });
  }
}

export default SnapSlider;
