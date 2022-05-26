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

  get errorsString() {
    return this.#errors.join('\n');
  }

  isString(errMsg) {
    if (typeof this.#value !== 'string') {
      this.#errors.push(errMsg);
    }

    return this;
  }

  minLength(min, errMsg) {
    if (this.#value.length < min) {
      this.#errors.push(errMsg);
    }

    return this;
  }

  hasNoNumbers(errMsg) {
    if (/\d/.test(this.#value)) {
      this.#errors.push(errMsg);
    }

    return this;
  }

  hasNoSpecialSymbols(errMsg) {
    if (/[!@#$%^&*()_+{}[\]'"\|/?.>,<`~*]/.test(this.#value)) {
      this.#errors.push(errMsg);
    }

    return this;
  }

  maxLength(max, errMsg) {
    if (this.#value.length > max) {
      this.#errors.push(errMsg);
    }

    return this;
  }

  isEmpty(errMsg) {
    const isObject = this.#value instanceof Object;
    const valueIsEmpty = isObject ? Object.keys(this.#value).length === 0 : !this.#value;

    if (valueIsEmpty) {
      this.#errors.push(errMsg);
    }

    return this;
  }

  isNumber(errMsg) {
    if (typeof this.#value !== 'number') {
      this.#errors.push(errMsg);
    }

    return this;
  }

  isWhole(errMsg) {
    if (this.#value % 1 !== 0) {
      this.#errors.push(errMsg);
    }

    return this;
  }

  minValue(min, errMsg) {
    if (this.#value < min) {
      this.#errors.push(errMsg);
    }

    return this;
  }

  maxValue(max, errMsg) {
    if (this.#value > max) {
      this.#errors.push(errMsg);
    }

    return this;
  }

  isArray(errMsg) {
    if (!(this.#value instanceof Array)) {

      this.#errors.push(errMsg);
    }

    return this;
  }

  consistsOf(type, errMsg) {
    const elementsAreOfType = this.#value.every(x => typeof x === type);

    if (!elementsAreOfType) {
      this.#errors.push(errMsg);
    }

    return this;
  }
}

export default Validator;