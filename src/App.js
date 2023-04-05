import React from 'react';
import styles from './App.module.css';
import TricksyHobbits from './404/TricksyHobbitses';
import AboutMe from './AboutMe/AboutMe';
import Header from './Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/about-me" element={<AboutMe />} />
        <Route exact path="*" element={<TricksyHobbits />} />
      </Routes>
    </Router>
  );
}

export default App;
