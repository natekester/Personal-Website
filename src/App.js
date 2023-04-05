import React from 'react';
import Header from './Header/Header';
import { Router } from '@reach/router';
import styles from './App.module.css';
import TricksyHobbits from './404/TricksyHobbitses';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Router>
        <TricksyHobbits path="*" />
      </Router>
    </div>
  );
}

export default App;
