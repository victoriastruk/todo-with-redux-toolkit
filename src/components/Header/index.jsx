import Weather from './Weather';
import User from './User';
import styles from './Header.module.sass';

function Header () {
  return (
    <div className={styles.container}>
      <Weather />
      <User />
    </div>
  );
}

export default Header;
