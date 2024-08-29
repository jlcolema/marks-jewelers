class Articles {
  constructor(element) {
    this.slidesContainer = element;
    this.slide = document.querySelector('.slide');
    this.prevButton = document.getElementById('slide-arrow-prev');
    this.nextButton = document.getElementById('slide-arrow-next');

    this.nextButton.addEventListener('click', () => {
      const slideWidth = this.slide.clientWidth;
      this.slidesContainer.scrollLeft += slideWidth;
    });

    this.prevButton.addEventListener('click', () => {
      const slideWidth = this.slide.clientWidth;
      this.slidesContainer.scrollLeft -= slideWidth;
    });
  }
}
export default Articles;
