class KlaviyoSubscribe {
  constructor(element, index) {
    this.form = element;
    this.index = index;
    this.config();
    this.mount();
  }

  config() {
    this.listId = this.form.getAttribute('data-list-id');
    this.params = JSON.parse(this.form.getAttribute('data-params') || '{}');
    this.emailField = this.form.querySelector('input[type="email"]');
    this.submitBtn = this.form.querySelector('button');
    this.successMsg = this.form.getAttribute('data-success-msg');
    this.errorMsg = this.form.getAttribute('data-error-msg');
    this.submitting = false;
    // Bind event and save so it can be referenced
    this.subscribe = this.subscribe.bind(this);
  }

  mount() {
    // Listen for form validation event
    this.bindEvents();
  }

  unmount() {
    this.unbindEvents();
  }

  bindEvents() {
    this.form.addEventListener('theme/form-validated', this.subscribe);
  }

  unbindEvents() {
    this.form.removeEventListener('theme/form-validated', this.subscribe);
  }

  async subscribe() {
    // Protect against double submissions
    if (this.submitting) {
      return;
    }

    this.submitting = true;
    this.submitBtn.disabled = true;

    // Send data to Klaviyo
    const subscribe = await this.submitToKlaviyo();

    this.submitting = false;
    this.submitBtn.disabled = false;

    // Show success (or error) message
    const message = subscribe.ok ? this.successMsg : this.errorMsg;
    this.showMessage(message);
  }

  async submitToKlaviyo() {
    // Convert JSON to URL-encoded params
    const body = new URLSearchParams(Object.entries({
      ...this.params,
      g: this.listId,
      email: this.emailField.value
    })).toString();

    const response = await fetch(this.form.action, {
      method: this.form.method || 'POST',
      headers: {
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body
    });

    return response;
  }

  showMessage(message) {
    // Replace form HTML with success or error message
    this.form.outerHTML = `
      <div class="subscribe__message">
        <p>${message}</p>
      </div>`;
  }
}

export default KlaviyoSubscribe;
