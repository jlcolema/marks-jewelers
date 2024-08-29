class CustomerTestimonials {
  constructor(element) {
    this.element = element;
    this.config();
    this.mount();
  }

  config() {
    this.observer = new IntersectionObserver(
      this.loadTestimonials.bind(this),
      {
        rootMargin: '600px',
        threshold: 0.1,
      },
    );
    this.items = [];
  }

  mount() {
    this.observer.observe(this.element);
  }

  unmount() {
    this.element.innerHTML = '';
    this.observer.unobserve(this.element);
  }

  // eslint-disable-next-line class-methods-use-this
  async loadTestimonials() {
    const myScrollFunc = () => {
      if (window.testmonialsPopulated) return;
      const y = (window.scrollY + window.innerHeight);
      // eslint-disable-next-line prefer-destructuring
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );
      const percent = (y / height);

      if (percent >= 0.6) {
        (() => {
          window.removeEventListener('scroll', myScrollFunc);
          // eslint-disable-next-line no-undef
          const map = new google.maps.Map(document.getElementById('map'), {
            center: {
              lat: -33.866,
              lng: 151.196,
            },
            zoom: 15,
          });
          const request = {
            placeId: 'ChIJb7puzA2kxokRkCDLnjIPDqc',
            fields: ['name', 'formatted_address', 'place_id', 'geometry', 'reviews'],
          };

          // commenting out unused variable
          // const infowindow = new google.maps.InfoWindow();

          // eslint-disable-next-line no-undef
          const service = new google.maps.places.PlacesService(map);

          service.getDetails(request, (place, status) => {
            if (
              // eslint-disable-next-line no-undef
              status === google.maps.places.PlacesServiceStatus.OK
              && place
              && place.reviews
            ) {
              let placesMarkup = '';
              const randomizer = Date.now() % 2;
              place.reviews.forEach((review, index) => {
                if (randomizer && index > 2) return;
                if (!randomizer && index <= 1) return;
                placesMarkup += `
                <div class="customer-testimonials__item">
                  <p class="customer-testimonials__content">${review.text}</p>
                  <div class="customer-testimonials__info">
                    <img src=${review.profile_photo_url}
                      srcset=${review.profile_photo_url}
                      width="40" height="40" alt="Profile Photo">
                    <span class="customer-testimonials__name">${review.author_name}</span>
                    <span class="customer-testimonials__date">
                        ${new Date((review.time * 1000)).toLocaleString('en-US').split(',')[0]}
                    </span>
                  </div>
                </div>`;
              });
              document.querySelector('.customer-testimonials__items').innerHTML = placesMarkup;
              window.testmonialsPopulated = true;
            }
          });
        })();
      }
    };
    window.addEventListener('scroll', myScrollFunc);
    myScrollFunc();
  }
}

export default CustomerTestimonials;
