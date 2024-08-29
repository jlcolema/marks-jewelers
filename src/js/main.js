import Emitter from './utils/emitter';
import MediaQuerySync from './utils/mqsync';
import toggleComponentByViewport from './utils/component-viewports';

// Pubsub
Shopify.theme.emitter = new Emitter();

// CSS breakpoint listener
Shopify.theme.viewport = new MediaQuerySync({
  sm: '(min-width: 48rem)', // ~768px
  md: '(min-width: 64rem)', // ~1024px
  lg: '(min-width: 80rem)', // ~1280px
});

const { viewport } = Shopify.theme;

/**
 * Dynamic component loading. Find data-component elements
 * and import/execute component JavaScript, with a little
 * webpack JS chunking and resolving magic.
 */
const loadComponent = async (name, element, index) => {
  // Dynamically import the component from `./components/<component-name>.js`
  const { default: Component } = await import(
    /* webpackChunkName: 'component-[request]' */
    `./components/${name}`
  );

  return {
    name,
    element,
    instance: new Component(element, index),
  };
};

/**
 * Select every `data-component` and iterate through them. The reduce method
 * returns an array with a promise of the previous result on each iteration,
 * which needs to be awaited to process the next result.
 */
const components = [...document.querySelectorAll('[data-component]')]
  .reduce(async (memo, element, index) => [
    ...await memo,
    ...await Promise.all(element.dataset.component.split(' ')
      .map(name => {
        if (!name) name = 'no-data-component';
        return loadComponent(name, element, index);
      })),
  ], []);

// Store all component instances and run any subsequent functions
components
  .then(values => {
    Shopify.theme.componentStore = values;
  })
  .then(() => {
    // Component is accordion and has data-mobile-accordion attribute
    const accordionFilter = ({
      name,
      element,
    }) => (
      name === 'accordion' && element.hasAttribute('data-mobile-accordion')
    );

    // Toggle accordions for mobile/desktop
    viewport.watch('sm', () => {
      toggleComponentByViewport(
        accordionFilter,
        !viewport.is('sm'),
        Shopify.theme.componentStore,
      );
    });
  });
