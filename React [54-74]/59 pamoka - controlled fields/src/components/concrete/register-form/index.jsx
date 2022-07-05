import React, { useState } from 'react'
import Card from '../../abstracts/card'
import classes from './index.module.scss';
import Button from '../../abstracts/button';
import TextField from '../../abstracts/text-field';

// Controller component - Container/smart
const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
      passwordConfirmation,
      name,
      surname,
      mobile,
    });
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  const changePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  }

  const changeName = (e) => {
    setName(e.target.value);
  }

  const changeSurname = (e) => {
    setSurname(e.target.value);
  }

  const changeMobile = (e) => {
    setMobile(e.target.value);
  }

  return (
    <div className={classes.container}>
      <Card>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h2>Registracija</h2>
          <TextField type="email" value={email} onChange={changeEmail} label="El paštas" />
          <TextField type="password" value={password} onChange={changePassword} label="Slaptažodis" />
          <TextField type="password" value={passwordConfirmation} onChange={changePasswordConfirmation} label="Pakartokie slaptažodį" />
          <TextField value={name} onChange={changeName} label="Vardas" />
          <TextField value={surname} onChange={changeSurname} label="Pavardė" />
          <TextField value={mobile} onChange={changeMobile} label="Mob. telefonas" />
          <Button type="submit">Registruotis</Button>
        </form>
      </Card>
    </div>
  )
}

export default RegisterForm
