document.addEventListener('click', event => {
  if (!event.target.closest('.faq__toggle')) return;
  const answer = event.target.closest('.faq__item');
  if (answer) {
    if (answer.classList.contains('faq-open')) {
      answer.classList.remove('faq-open');
    } else {
      answer.classList.add('faq-open');
    }
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('#modal-trigger')) return;
  const modal = document.querySelector('#contactModal__wrap');
  if (modal && !modal.classList.contains('modal-active')) {
    modal.classList.add('modal-active');
  }
});
document.addEventListener('click', event => {
  if (event.target.id !== 'contactModal__wrap' && !event.target.classList.contains('modal-close')) return;
  const modal = document.querySelector('#contactModal__wrap');
  if (modal && modal.classList.contains('modal-active')) {
    modal.classList.remove('modal-active');
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.contactInfo__mobileTrigger')) return;
  const dropdown = document.querySelector('.contactInfo__consultHours ul');
  if (dropdown && dropdown.style.display !== 'block') {
    dropdown.style.display = 'block';
  } else if (dropdown && dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  }
});
