import Header from './components/Header';
import Main from './components/Main'

import styles from './App.module.sass';

function App () {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
