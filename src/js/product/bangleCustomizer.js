export default function bangleCustomizer() {
  /* eslint-disable */
  if (!dynamicProduct) return;

  function injectVideo() {
    const videoSection = document.createElement('div');
    videoSection.className = 'video-section';

    const video = document.createElement('video');
    video.setAttribute('width', '100%');
    video.setAttribute('autoplay', 'true');
    video.setAttribute('loop', 'true');
    video.setAttribute('muted', 'true');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('controls', 'true');

    const source = document.createElement('source');
    source.setAttribute('src', 'https://cdn.shopify.com/videos/c/o/v/8794c97938f840c3b88fdd8850304ba4.mp4');
    source.setAttribute('type', 'video/mp4');

    // Assemble the elements
    video.appendChild(source);
    videoSection.appendChild(video);

    // Create and add the text element below the video
    const textElement = document.createElement('p');
    textElement.classList.add('video-info');
    textElement.textContent = 'Scroll to Personalize Your Own Charm Bangle';
    videoSection.appendChild(textElement);

    // Insert the video section before the #dynamic-custom-product element
    const dynamicCustomProduct = document.querySelector('#dynamic-custom-product');
    if (dynamicCustomProduct) {
      dynamicCustomProduct.parentNode.insertBefore(videoSection, dynamicCustomProduct);
    }
  }

  injectVideo();

  const waitForJQ = setInterval(() => {
    if ($) {
      clearInterval(waitForJQ);
      $(document)
        .ready(() => {
          $.ajax({
            url: 'https://shopifyapp.halloweenmakeup.com/front/call_product_mark_jewellers.php',
            data: `product_id=${productID}&shop_url=${shopDomain}`,
            dataType: 'json',
            success: json => {
              const left = json.left;
              const right = json.right;
              $('#custom_personalization')
                .html(left);
              $('#right_product')
                .html(right);
            },
            error: jqXHR => {
              console.log(jqXHR);
              alert('Error Loading Custom Options. Please try again later.');
            },
          });
        });
    }
  }, 500);

  /* eslint-enable */

  const waitForImgClass = setInterval(() => {
    if (document.querySelector('.img_dropdown')) {
      clearInterval(waitForImgClass);
      document.querySelectorAll('.img_dropdown')
        .forEach(elem => {
          elem.classList.add('img-dropdown');
        });
    }
  }, 500);

  const waitForProcessingClass = setInterval(() => {
    if (document.querySelector('.processing_time')) {
      clearInterval(waitForProcessingClass);
      document.querySelectorAll('.processing_time')
        .forEach(elem => {
          elem.classList.add('processing-time');
        });
    }
  }, 500);

  const waitForSwatchClass = setInterval(() => {
    if (document.querySelector('.pplr-swatch-element')) {
      clearInterval(waitForSwatchClass);
      document.querySelectorAll('.pplr-swatch-element')
        .forEach(elem => {
          elem.style.zIndex = '1';
        });
    }
  }, 500);

  const waitForReorderText = setInterval(() => {
    if (document.querySelector('.reorder_text')) {
      document.querySelector('.reorder_text').style.display = 'none';
    }

    if (!document.querySelectorAll('#charmBank .item').length) return;

    if (document.querySelector('.reorder_text')) {
      clearInterval(waitForReorderText);

      const newReorderText = document.createElement('div');
      newReorderText.classList.add('new-reorder-text');
      newReorderText.innerHTML = `<div style="height:20px;width:20px;margin-right:8px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<g>
\t<g>
\t\t<g id="XMLID_46_">
\t\t\t<g>
\t\t\t\t<g>
\t\t\t\t\t<path d="M32,64C14.4,64,0,49.6,0,32S14.4,0,32,0s32,14.4,32,32S49.6,64,32,64z M32,4C16.6,4,4,16.6,4,32s12.6,28,28,28       s28-12.6,28-28S47.4,4,32,4z"/>
\t\t\t\t</g>
\t\t\t</g>
\t\t</g>
\t</g>
\t<g>
\t\t<g>
\t\t\t<g>
\t\t\t\t<polygon points="29,16 35,16 34,36 30,36     "/>
\t\t\t</g>
\t\t</g>
\t\t<g>
\t\t\t<g>
\t\t\t\t<circle cx="32" cy="44" r="4"/>
\t\t\t</g>
\t\t</g>
\t</g>
</g>
</svg></div><div style="font-weight: 700">Drag images to reorder charms</div>`;

      document.querySelector('#charmBank').before(newReorderText);
    }
  }, 500);
}
