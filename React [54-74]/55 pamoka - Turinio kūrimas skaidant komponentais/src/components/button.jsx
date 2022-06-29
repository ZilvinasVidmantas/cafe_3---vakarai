import classes from './button.module.scss';

function Button({ children }) {

  return (
    <button className={classes.btn}>{children}</button>
  );
}

export default Button;
