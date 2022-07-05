import React, { useState } from 'react'
import Card from '../../abstracts/card'
import classes from './index.module.scss';
import Button from '../../abstracts/button';
import TextField from '../../abstracts/text-field';

const initValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
  name: '',
  surname: '',
  mobile: '',
}

// Controller component - Container/smart
const RegisterForm = () => {
  const [values, setValues] = useState(initValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues(initValues);
  }

  const changeFieldValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div className={classes.container}>
      <Card>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h2>Registracija</h2>
          <TextField
            name="email"
            type="email"
            value={values.email}
            onChange={changeFieldValue}
            label="El paštas" />
          <TextField
            name="password"
            type="password"
            value={values.password}
            onChange={changeFieldValue}
            label="Slaptažodis" />
          <TextField
            name="passwordConfirmation"
            type="password"
            value={values.passwordConfirmation}
            onChange={changeFieldValue}
            label="Pakartokie slaptažodį" />
          <TextField
            name="name"
            value={values.name}
            onChange={changeFieldValue}
            label="Vardas" />
          <TextField
            name="surname"
            value={values.surname}
            onChange={changeFieldValue}
            label="Pavardė" />
          <TextField
            name="mobile"
            value={values.mobile}
            onChange={changeFieldValue}
            label="Mob. telefonas" />
          <Button type="submit">Registruotis</Button>
        </form>
      </Card>
    </div>
  )
}

export default RegisterForm
