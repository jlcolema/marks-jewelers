class Handbags {
  constructor(element) {
    this.container = element;
    this.slideLinks = document.querySelectorAll('span.brand-link');
    this.curURL = window.location.href;

    this.slideLinks.forEach(link => {
      const urlQuery = 'filter.v.price.gte';
      const filter = link.innerText.replace(' ', '+').replace(' ', '+');
      link.addEventListener('click', event => {
        if (!link.classList.contains('active')) {
          if (this.curURL.includes(urlQuery)) {
            window.location = `${this.curURL}&filter.p.m.itemDetails.Designer=${filter}`;
          } else {
            window.location = `${this.curURL}?filter.v.price.gte=&filter.p.m.itemDetails.Designer=${filter}`;
          }
        } else {
          window.location = this.curURL.replace(`&filter.p.m.itemDetails.Designer=${filter}`, '');
        }
      });
    });

    this.curDesigners = document.querySelectorAll('.x-cell span.brand-link');
    this.all = document.querySelector('.x-cell span.brand-link-all');
    this.curDesignerArr = [];
    this.curDesigners.forEach(span => {
      const designer = span.textContent.replace(' ', '+');
      this.curDesignerArr.push(designer);
    });

    this.curDesignerArr.forEach((name, index) => {
      if (this.curURL.includes(name)) {
        this.curDesigners[index].classList.add('active');
        this.all.classList.remove('active');
      }
    });
  }
}

export default Handbags;
