import { setAttributes, removeAttributes } from '../utils';

class Accordion {
  constructor(element, index) {
    this.element = element;
    this.index = index;
    this.config();
    this.mount();
  }

  config() {
    this.items = [...this.element.querySelectorAll('.js-accordion__item')];
    this.showClass = 'accordion__item--is-open';
    this.multiItems = !(this.element.getAttribute('data-multi-items') === 'off');
    // Bind event and save so it can be referenced
    this.triggerAccordion = this.triggerAccordion.bind(this);
  }

  mount() {
    // Set initial aria attributes
    this.setAttributes();

    // Listen for Accordion events
    this.bindEvents();
  }

  unmount() {
    this.removeAttributes();
    this.unbindEvents();
  }

  bindEvents() {
    this.element.addEventListener('click', this.triggerAccordion);
  }

  unbindEvents() {
    this.element.removeEventListener('click', this.triggerAccordion);
  }

  setAttributes() {
    this.items.forEach((item, i) => {
      const trigger = item.querySelector('.js-accordion__trigger');
      const content = item.querySelector('.js-accordion__panel');
      const isOpen = item.classList.contains(this.showClass) ? 'true' : 'false';

      const triggerAttributes = {
        'aria-expanded': isOpen,
        'aria-controls': `accordion-content-${this.index}-${i}`,
        id: `accordion-header-${this.index}-${i}`,
      };

      // Add button attributes if not a button
      if (trigger.tagName !== 'BUTTON') {
        triggerAttributes.tabindex = '0';
        triggerAttributes.role = 'button';
      }

      setAttributes(trigger, triggerAttributes);
      setAttributes(content, {
        'aria-labelledby': `accordion-header-${this.index}-${i}`,
        id: `accordion-content-${this.index}-${i}`,
      });
    });
  }

  removeAttributes() {
    this.items.forEach(item => {
      const trigger = item.querySelector('.js-accordion__trigger');
      const content = item.querySelector('.js-accordion__panel');

      removeAttributes(trigger, ['aria-expanded', 'aria-controls', 'id', 'role', 'tabindex']);
      removeAttributes(content, ['aria-labelledby', 'id']);
    });
  }

  triggerAccordion({ target }) {
    if (target.closest('a')) return;

    const trigger = target.closest('.js-accordion__trigger');
    // Check index to make sure the click didn't happen inside a child accordion
    if (!trigger || this.items.indexOf(trigger.parentElement) === -1) return;

    const bool = trigger.getAttribute('aria-expanded') === 'true';
    this.animateAccordion(trigger, bool, false);
  }

  animateAccordion(trigger, bool) {
    const item = trigger.closest('.js-accordion__item');
    const content = item.querySelector('.js-accordion__panel');

    if (!bool) item.classList.add(this.showClass);
    trigger.setAttribute('aria-expanded', !bool);
    this.resetContentVisibility(item, content, bool);

    if (!this.multiItems && !bool) this.closeSiblings(item);
  }

  resetContentVisibility(item, content, bool) {
    item.classList.toggle(this.showClass, !bool);
    content.removeAttribute('style');
    if (bool && !this.multiItems) {
      // Accordion item has been closed -> check if there's one open to move inside viewport
      this.moveContent();
    }
  }

  closeSiblings(current) {
    // If only one accordion can be open -> search to see if another is open
    const index = this.items.indexOf(current);

    this.items.forEach((item, i) => {
      if (item.classList.contains(this.showClass) && i !== index) {
        this.animateAccordion(
          item.querySelector('.js-accordion__trigger'),
          true
        );
      }
    });
  }

  moveContent() {
    // Make sure title of the accordion just opened is inside the viewport
    const openAccordion = this.element.querySelector(this.showClass);
    if (!openAccordion) return;

    const boundingRect = openAccordion.getBoundingClientRect();
    if (boundingRect.top < 0 || boundingRect.top > window.innerHeight) {
      const windowScrollTop = window.scrollY || document.documentElement.scrollTop;
      window.scrollTo(0, boundingRect.top + windowScrollTop);
    }
  }
}

export default Accordion;
