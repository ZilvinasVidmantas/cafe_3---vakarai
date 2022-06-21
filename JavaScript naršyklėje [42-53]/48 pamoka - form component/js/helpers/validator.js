const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const UPPER_CASE_LETTER_REGEX = /[A-ZĄČĘĖĮŠŲŪŽ]/;
const LOWER_CASE_LETTER_REGEX = /[a-ząčęėįšųūž]/;
const ONLY_LETTERS_REGEX = /^[A-ZĄČĘĖĮŠŲŪŽa-ząčęėįšųūž ]*$/;
const NUMBER_REGEX = /\d/;
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

  get HTMLError() {
    return this.#errors.join('<br>');
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
    if (!EMAIL_REGEX.test(this.#value)) {
      this.#errors.push(errMessage);
    }

    return this;
  }

  min(amount, errMessage) {
    if (this.#value.length < amount) {
      this.#errors.push(errMessage);
    }

    return this;
  }

  max(amount, errMessage) {
    if (this.#value.length > amount) {
      this.#errors.push(errMessage);
    }

    return this;
  }

  hasUpperCase(errMessage) {
    if (!UPPER_CASE_LETTER_REGEX.test(this.#value)) {
      this.#errors.push(errMessage);
    }

    return this;
  }

  hasLowerCase(errMessage) {
    if (!LOWER_CASE_LETTER_REGEX.test(this.#value)) {
      this.#errors.push(errMessage);
    }

    return this;
  }

  hasNumber(errMessage) {
    if (!NUMBER_REGEX.test(this.#value)) {
      this.#errors.push(errMessage);
    }

    return this;
  }

  alpha(errMessage) {
    if (!ONLY_LETTERS_REGEX.test(this.#value)) {
      this.#errors.push(errMessage);
    }

    return this;
  }

  equal(value, errMessage) {
    if (this.#value !== value) {
      this.#errors.push(errMessage);
    }

    return this;
  }

  decimalPlaces(numbersAfterComma, errMessage) {
    const numbers = this.#value.split('.')[1];
    if (numbers && numbers.length > numbersAfterComma) {
      this.#errors.push(errMessage);
    }
    return this;
  }

  positive(errMessage) {
    if (this.#value[0] === '-') {
      this.#errors.push(errMessage);
    }

    return this;
  }
}

export default Validator;