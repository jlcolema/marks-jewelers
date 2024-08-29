export default function productModal() {
  const body = document.querySelector('body > .wrapper');
  const modal = `
  <div class='learn-more-modal hidden'>
    <img class='modal-close' src='https://cdn.shopify.com/s/files/1/0608/9752/5982/t/209/assets/cross-flat-black.svg?v=1674748683'>
    <img class='modal-mobile-img' src='https://cdn.shopify.com/s/files/1/0608/9752/5982/t/209/assets/MJ-Mobile-Modal-Image-2x.jpg?v=1674750332'>
    <div class='how-it-works-modal'>
      <div class='modal-content-copy'>
        <h2 class='modal-title'>How It Works</h2>
        <p class='modal-subtitle'>One-on-One Service, Just for You!</p>
        <span>We carry thousands of quality styles and we’ll find the right one for you. Join anytime or book an appointment for a live, one-on-one consultation with our jewelry experts.</span>
        <p class='modal-subtitle'>Expert Advice</p>
        <span>Wether you are buying for yourself or planning the perfect gift - we’ve got you covered. Discover our selection and let us find the perfect gift for life’s special moments.</span>
        <p class='modal-subtitle'>Shop from the Comfort of Home</p>
        <span>We’ll walk you through the store to find what you’re looking for. Left the store but have more questions? No problem! Connect with a store associate live!</span>
        <div>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" class="svg-inline--fa fa-video fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" color="#000000" style="margin-right: 6px;">
           <path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"></path>
          </svg>
          <button class='talk-to-expert-modal'>Shop Live</button>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="#FFFFFFFF" style="font-size: 3px; margin-left: 2px;">
            <path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class='lower-icons'>
      <div class='modal-icon-container'>
        <img src='https://cdn.shopify.com/s/files/1/0608/9752/5982/t/209/assets/MJ-VirtualLobby-Icon-Dark.png?v=1674748682'>
        <h3>Join The Virtual Lobby</h3>
        <p>Browse our collections while you wait.</p>
      </div>
      <div class='modal-icon-container'>
        <img src='https://cdn.shopify.com/s/files/1/0608/9752/5982/t/209/assets/MJ-Chat-Icon-Dark.png?v=1674748680'>
        <h3>Talk + Shop</h3>
        <p>Receive a personalized consultation.</p>
      </div>
      <div class='modal-icon-container'>
        <img src='https://cdn.shopify.com/s/files/1/0608/9752/5982/t/209/assets/MJ-InstantCheckout-Icon-Dark.png?v=1674748681'>
        <h3>Instant Check Out</h3>
        <p>Your order is on its way.</p>
      </div>
    </div>
  </div>
  <div class='overlay-modal-background hidden'></div>`;
  body.insertAdjacentHTML('afterbegin', modal);
  const learnMoreModal = document.querySelector('.learn-more-modal');
  const modalOverlay = document.querySelector('.overlay-modal-background');
  const learnMoreClick = document.querySelector('.learn-more-click');
  learnMoreClick.addEventListener('click', () => {
    learnMoreModal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
  });

  const overlayModalBackground = document.querySelector('.overlay-modal-background');
  if (overlayModalBackground) {
    overlayModalBackground.addEventListener('click', () => {
      modalOverlay.classList.add('hidden');
      learnMoreModal.classList.add('hidden');
    });
  }

  const modalClosebutton = document.querySelector('.modal-close');
  if (modalClosebutton) {
    modalClosebutton.addEventListener('click', () => {
      modalOverlay.classList.add('hidden');
      learnMoreModal.classList.add('hidden');
    });
  }

  const clickButton = document.querySelector('.talk-to-expert-modal');
  if (clickButton) {
    clickButton.addEventListener('click', () => {
      document.querySelector('.ghost-ctc > div').click();
    });
  }
}
