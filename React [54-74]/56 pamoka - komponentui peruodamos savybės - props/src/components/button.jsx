import classes from './button.module.scss';

function Button({ children }) {

  return (
    <button className={classes.btn}>{children}</button>
  );
}

export default Button;

/*
  Tikslas: Įgalinti secondary spalvos pasirinkimą

  Eiga:
    * Sukurti klasę "secondary" stiliaus module faile, kuri įgalintų "secondary" spalvos mygtuką
    * Button komponente priimti props'ą color, ir jeigu jis yra secondary, papildyti savybę
      className papildoma klase "secondary"
*/
