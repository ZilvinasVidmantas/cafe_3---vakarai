const registerForm = document.querySelector('.js-register-form');

const handleRegisterFormSubmit = (event) => {
  event.preventDefault();
  const fieldsArr = Array.from(event.target.querySelectorAll('[name]'));
  const values = fieldsArr.reduce((prevValues, { name, value }) => {
    // 5 min  įsigilinimas
    // 10 min pertrauka
    // 19:10 - Klausimai
    return {
      ...prevValues,
      [name]: value
    }
  }, {});
  console.log(values);
}

registerForm.addEventListener('submit', handleRegisterFormSubmit);