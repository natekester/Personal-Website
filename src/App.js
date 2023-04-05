import React from 'react';
import TricksyHobbits from './404/TricksyHobbitses';
import AboutMe from './AboutMe/AboutMe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/about-me" element={<AboutMe />} />
        <Route exact path="*" element={<TricksyHobbits />} />
      </Routes>
    </Router>
  );
}

export default App;
