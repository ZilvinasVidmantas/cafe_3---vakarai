const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Validator {
  #value;
  #errors;

  constructor(value) {
    this.#value = value;
    this.#errors = [];
  }

  get value() {
    return this.#value;
  }

  get hasErrors() {
    return this.#errors.length > 0;
  }

  get errors() {
    return [...this.#errors];
  }

  required(errMessage) {
    const valueExists =
      this.#value !== undefined
      && this.#value !== null
      && this.#value !== '';

    if (!valueExists) {
      this.#errors.push(errMessage);
    }

    return this;
  }

  email(errMessage) {
    const isEmail = EMAIL_REGEX.test(this.#value);

    if (!isEmail) {
      this.#errors.push(errMessage);
    }

    return this;
  }
}

export default Validator;