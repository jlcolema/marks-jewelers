class BlogLinks {
  constructor(element) {
    this.container = element;
    this.catLinks = this.container.querySelectorAll('.category-link');
    this.curBlog = document.querySelectorAll('.breadcrumbs li');
    if (this.curBlog[2]) {
      this.curBlog = this.curBlog[2].innerText;
      this.curBlog = this.lowerCaseAllWordsExceptFirstLetters(this.curBlog);
    }
    this.blogName = location.pathname.split('/');
    this.blogName = this.blogName[2];
    this.catLinks.forEach(link => {
      let linkTxt = link.innerText;
      if (this.curBlog[2]) {
        console.log(linkTxt, this.curBlog, this.curBlog == linkTxt);
        if (this.curBlog == linkTxt) {
          link.classList.add('active');
        }
      }

      link.addEventListener('click', event => {
        if (link.classList.contains('active')) {
          console.log(location.origin + '/blogs/' + this.blogName);
          window.location = location.origin + '/blogs/' + this.blogName;
        } else {
          linkTxt = linkTxt.replace(' ', '-');
          window.location = location.origin + '/blogs/' + this.blogName + '/tagged/' + linkTxt;
        }
      });
    });
  }

  lowerCaseAllWordsExceptFirstLetters = string =>
    string.replaceAll(/\S*/g, word =>
      `${word.slice(0, 1)}${word.slice(1).toLowerCase()}`
    );
}
export default BlogLinks;

