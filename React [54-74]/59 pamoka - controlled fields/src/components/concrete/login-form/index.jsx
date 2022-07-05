import React, { useState } from 'react'
import Card from '../../abstracts/card'
import classes from './index.module.scss';
import Button from '../../abstracts/button';
import TextField from '../../abstracts/text-field';

// Controller component - Container/smart
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className={classes.container}>
      <Card>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h2>Prisijungimas</h2>
          <TextField type="email" value={email} onChange={changeEmail} label="El paštas" />
          <TextField type="password" value={password} onChange={changePassword} label="Slaptažodis" />
          <Button type="submit">Reistruotis</Button>
        </form>
      </Card>
    </div>
  )
}

export default LoginForm

/*
  1. Sukurti TextField, kaip reprezentacinį komponeneta
  2. Panaudoti TextField Login formoje nepakeičiant funkcionalumo
  3. Perskaityti temą: https://reactjs.org/docs/forms.html#controlled-components

  Pažymėti - Atlikau užduotis MS Teams chate'e

  Kol laukiate, galite perskaityti:
    * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
    * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0


*/
