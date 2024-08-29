class HintValidator {
  constructor(element) {
    this.form = element;
    this.senderEmail = this.form.querySelector('#k_id_SenderEmail');
    this.recieverEmail = this.form.querySelector('#k_id_email');
    this.isEmailValid = email => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    this.isRequired = value => (value !== '');
    this.checkEmail = email => {
      let valid = false;
      const emailV = email.value.trim();
      if (!this.isRequired(emailV)) {
        this.showError(email);
      } else if (!this.isEmailValid(emailV)) {
        this.showError(email);
      } else {
        this.showSuccess(email);
        valid = true;
      }
      return valid;
    };
    this.showError = input => {
      // add the error class
      input.classList.remove('success');
      input.classList.add('error');
    };
    this.showSuccess = input => {
      // remove the error class
      input.classList.remove('error');
      input.classList.add('success');
    };
    this.form.addEventListener('submit', e => {
      // validate fields
      const isEmailValid = this.checkEmail(this.senderEmail);
      const isSenderValid = this.checkEmail(this.recieverEmail);

      const isFormValid = isEmailValid && isSenderValid;
      // submit to the server if the form is valid
      if (!isFormValid) {
        // prevent the form from submitting
        e.preventDefault();
      }
    });
  }
}

export default HintValidator;
