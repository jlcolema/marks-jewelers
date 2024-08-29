export default function imagePanZoom() {
  const mainImageContainer = document.querySelector('.product-page__medias .top-container .main-image-container');

  mainImageContainer.addEventListener('mousemove', e => {
    const parentImageContainer = e.target.closest('.main-image-container');
    const currentImage = parentImageContainer.querySelector('.current-image');

    // Gets information about the position of the element.
    const dimensions = parentImageContainer.getBoundingClientRect();

    // Calculates position of cursor inside the element
    const x = e.clientX - dimensions.left;
    const y = e.clientY - dimensions.top;

    // Calculates position of cursor as percentage of width/height of element
    let xPercent = (Math.round(100 / (dimensions.width / x))) * 2 - 100;
    let yPercent = (Math.round(100 / (dimensions.height / y))) * 2 - 100;

    // Prevents panning too far
    if (xPercent > 35) xPercent = 35;
    if (xPercent < -35) xPercent = -35;
    if (yPercent > 25) yPercent = 25;
    if (yPercent < -25) yPercent = -25;

    currentImage.style.transform = `scale(2) translate(${xPercent * -1}%, ${yPercent * -1}%)`;
  });

  mainImageContainer.addEventListener('mouseleave', e => {
    const parentImageContainer = e.target.closest('.main-image-container');
    const currentImage = parentImageContainer.querySelector('.current-image');

    currentImage.removeAttribute('style');
  });
}
