import React from 'react';
import TricksyHobbits from './components/404/TricksyHobbitses';
import AboutMe from './components/AboutMe/AboutMe';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Career from './components/Career/Career';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/about-me" element={<AboutMe />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/Education" element={<Education />} />
        <Route exact path="/Projects" element={<Projects />} />

        <Route path="*" element={<Navigate to="/about-me" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
