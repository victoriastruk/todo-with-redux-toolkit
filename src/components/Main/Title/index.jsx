import styles from './Title.module.sass'

function Title ({ title }) {
  return <h1 className={styles.title}>{title}</h1>;
}

export default Title;
