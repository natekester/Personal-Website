import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './App.module.css';
import TricksyHobbits from './404/TricksyHobbitses';
import AboutMe from './AboutMe/AboutMe';
import Header from './Header/Header';

function App() {
  return (
    <div className={styles.app}>
      {/* <Header /> */}
      <Router>
        <AboutMe path="about-me" />
        {/* <TricksyHobbits path="*" /> */}
      </Router>
    </div>
  );
}

export default App;
