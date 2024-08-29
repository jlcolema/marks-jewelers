class AccountNavLinks {
  constructor() {
    this.allLinks = document.querySelectorAll('.account-links a');
    this.currentLocation = window.location.pathname + window.location.search;
    this.setCurrent();
  }

  setCurrent() {
    this.allLinks.forEach(link => {
      if (link.getAttribute('href') === this.currentLocation) {
        link.classList.add('active-link');
      }
    });
  }
}

export default AccountNavLinks;
