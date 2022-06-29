import classes from './button.module.scss';

function Button({ children, color }) {

  let className = classes.btn;
  if (color === 'secondary') {
    className += ` ${classes.secondary}`;
  }

  return (
    <button className={className}>{children}</button>
  );
}

export default Button;
