
import Header from './Header/Header'
import { Router} from "@reach/router"
import styles from './App.module.css'
import TricksyHobbits from './404/TricksyHobbitses';

function App (){
  return (
    <div className={styles.app}>
      <Router>
        <Header path="/" />
        <TricksyHobbits path='*' />
      </Router>
    </div>
  );
}

export default App;
