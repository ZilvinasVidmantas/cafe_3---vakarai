import classes from './index.module.scss';

function Button({ children, color, ...props }) {

  let className = classes.btn;
  if (color === 'secondary') {
    className += ` ${classes.secondary}`;
  }

  return (
    <button className={className} {...props}>{children}</button>
  );
}

export default Button;
