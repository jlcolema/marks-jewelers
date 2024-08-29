export default function klaviyoForm() {
  const emailProdName = document.querySelector('.product-page__title h1').textContent;
  const emailProdUrl = window.location.href;
  const emailProdImg = document.querySelector('.main-image-container img')
    .getAttribute('src');
  const emailProdPrice = document.querySelector('.product-page__price').textContent;
  const form = document.querySelector('#email_hint_it_signup');

  const klaviyoWait = setInterval(() => {
    if (typeof (KlaviyoSubscribe) === 'object' && (form)) {
      clearInterval(klaviyoWait);
      /* eslint-disable */
      KlaviyoSubscribe.attachToForms('#email_hint_it_signup', {
        hide_form_on_success: true,
        extra_properties: {
          $source: 'Hint It',
          $method_type: 'Klaviyo Form',
          $method_id: 'embed - Hint It',
          success_message: 'Thank you for sharing!',
          success: function ($form) {
            // `$form` is a jQuery wrapper around the form that was submitted.
            // This makes it easy to get the email address or form fields.
            const email = $('#email_hint_it_signup')
              .find('[name="email"]')
              .val();
            _learnq.push(['identify', { $email: email }]);
            const SenderName = $('#email_hint_it_signup')
              .find('#k_id_SenderName')
              .val();
            const SenderEmail = $('#email_hint_it_signup')
              .find('#k_id_SenderEmail')
              .val();
            _learnq.push(['track', 'Hint It Submision', {
              SenderName,
              SenderEmail,
              ProductName: emailProdName,
              ProductImageURL: emailProdImg,
              ProductUrl: emailProdUrl,
              Price: emailProdPrice,
            }]);
            // Re identify sender
            _learnq.push(['identify', { $email: SenderEmail }]);
            // Hide the other messages and show ours.
            $('#email_hint_it_signup')
              .addClass('hidden');
            // Show our message
            $('.ti-success-msg')
              .removeClass('hidden');
            // move down the form on success
            $('.ti-drop-hint')
              .addClass('success');
          },
        },
      });
      /* eslint-enable */
    }
  }, 100);
}
