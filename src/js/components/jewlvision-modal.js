class JewlVisionModal {
  constructor() {
    this.getStarted = document.querySelectorAll('.get-started');

    this.waitForKlo = setInterval(() => {
      if (window._klOnsite._loaded) {
        clearInterval(this.waitForKlo);
        this.getStarted.forEach(item => {
          item.addEventListener('click', event => {
            if (window.innerWidth >= 768) {
              window._klOnsite = window._klOnsite || [];
              window._klOnsite.push(['openForm', 'SAVLPG']);
            }else {
              window._klOnsite = window._klOnsite || [];
              window._klOnsite.push(['openForm', 'XqWzQW']);
            }
          });
        });
      }
    }, 800);
  }
}

export default JewlVisionModal;
