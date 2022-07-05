import React, { useState } from 'react'
import Card from '../../abstracts/card'
import classes from './index.module.scss';
import Button from '../../abstracts/button';

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
          <div>
            <label htmlFor="">El paštas</label>
            <br />
            <input type="email" value={email} onChange={changeEmail} />
          </div>
          <div>
            <label htmlFor="">Slaptažodis</label>
            <br />
            <input type="password" value={password} onChange={changePassword} />
          </div>
          <Button type="submit">Reistruotis</Button>
        </form>
      </Card>
    </div>
  )
}

export default LoginForm