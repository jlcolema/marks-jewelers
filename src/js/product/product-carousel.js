function carouselize(carousel) {
  const carouselContainer = carousel;
  const listImageArea = carouselContainer.querySelector('.next-list');
  const listOfImages = listImageArea.querySelectorAll('img');
  const currentImage = carouselContainer.querySelector('.current-image');
  const arrowLeft = carouselContainer.querySelector('.arrow-left');
  const arrowRight = carouselContainer.querySelector('.arrow-right');
  const mainContainer = carouselContainer.querySelector('.top-container');
  // add current to first list item
  let current = listOfImages[0];
  const lastElement = listOfImages[listOfImages.length - 1];
  current.classList.add('current-image-list');
  if (listOfImages.length > 1) {
    mainContainer.addEventListener('mouseenter', e => {
      arrowLeft.style.visibility = 'visible';
      arrowRight.style.visibility = 'visible';
    });
    mainContainer.addEventListener('mouseleave', e => {
      arrowLeft.style.visibility = 'hidden';
      arrowRight.style.visibility = 'hidden';
    });
  }

  function goToRight() {
    current = listImageArea.querySelector('.current-image-list');
    current.parentElement.nextElementSibling.children[0].classList.add('current-image-list');
    current.classList.remove('current-image-list');
    current = listImageArea.querySelector('.current-image-list');
    listImageArea.scrollLeft = current.offsetLeft;
    currentImage.attributes.src.value = current.attributes.src.value;
    currentImage.classList.add('slideInFromRight');
    setTimeout(() => {
      if (current === lastElement) {
        arrowRight.classList.add('disabled');
        arrowLeft.classList.remove('disabled');
      }
      currentImage.classList.remove('slideInFromRight');
    }, 500);
  }

  function goToLeft() {
    current = listImageArea.querySelector('.current-image-list');
    current.parentElement.previousElementSibling.children[0].classList.add('current-image-list');
    current.classList.remove('current-image-list');
    current = listImageArea.querySelector('.current-image-list');
    listImageArea.scrollLeft = current.offsetLeft;
    currentImage.attributes.src.value = current.attributes.src.value;
    currentImage.classList.add('slideInFromLeft');
    setTimeout(() => {
      if (current === listOfImages[0]) {
        arrowLeft.classList.add('disabled');
        arrowRight.classList.remove('disabled');
      }
      currentImage.classList.remove('slideInFromLeft');
    }, 500);
  }

  function changeCurrentImage(newImage) {
    currentImage.classList.add('fadeIn');
    setTimeout(() => {
      currentImage.classList.remove('fadeIn');
    }, 500);
    currentImage.attributes.src.value = this.attributes.src.value;
    listOfImages.forEach(image => {
      image.classList.remove('current-image-list');
    });
    this.classList.add('current-image-list');
    current = listImageArea.querySelector('.current-image-list');
    if (current === lastElement) {
      arrowRight.classList.add('disabled');
      arrowLeft.classList.remove('disabled');
    }
    if (current === listOfImages[0]) {
      arrowLeft.classList.add('disabled');
      arrowRight.classList.remove('disabled');
    }
  }

  arrowLeft.addEventListener('click', e => {
    goToLeft();
  });
  arrowRight.addEventListener('click', e => {
    goToRight();
  });
  (function setProto() {
    if (typeof NodeList.prototype.forEach === 'function') return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
  }());
  listOfImages.forEach(image => image.addEventListener('click', changeCurrentImage));
}

export default function productCarousel() {
  const carousels = document.querySelectorAll('.carousel-container');
  [].forEach.call(carousels, carousel => {
    carouselize(carousel);
  });
}
