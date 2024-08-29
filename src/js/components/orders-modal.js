class OrdersModal {
  constructor() {
    this.links = document.querySelectorAll('.order-history a');
    this.load = document.querySelector('.loading');
    this.overlay = document.querySelector('.order-modal-overlay');
    this.addEvents();
  }

  addEvents() {
    this.links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        let url = link.getAttribute('href');
        const path = new URL(url);
        url = path.pathname;
        this.buildModal(url);
        this.load.style.display = 'block';
      });
    });
  }

  buildModal(url) {
    fetch(url).then(response => response.text())
      .then(responseText => {
        const newHTML = new DOMParser()
          .parseFromString(responseText, 'text/html')
          .getElementById('order-main').innerHTML;

        document.getElementById('order-modal').innerHTML = newHTML;
      })

      .then(() => {
        this.load.style.display = 'none';
        this.overlay.style.display = 'block';
        window.scrollTo(0, 0);
        document.querySelector('#order-modal').style.display = 'flex';
      })

      .then(() => {
        const modalClose = document.querySelectorAll('.modal-close');
        [this.overlay, modalClose[0], modalClose[1]].forEach(item => {
          item.addEventListener('click', event => {
            document.querySelector('#order-modal').style.display = 'none';
            document.querySelector('.order-modal-overlay').style.display = 'none';
            document.querySelector('#order-modal').innerHTML = '';
          });
        });
      });
  }
}

export default OrdersModal;
