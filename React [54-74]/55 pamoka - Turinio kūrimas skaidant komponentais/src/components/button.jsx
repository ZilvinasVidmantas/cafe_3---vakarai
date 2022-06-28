import classes from './button.module.scss';

function Button({ children, style = {} }) {

  return (
    <button className={classes.btn} style={style}>{children}</button>
  );
}

export default Button;
