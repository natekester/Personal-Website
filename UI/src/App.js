import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Career from './components/Career/Career';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';

function App() {
  // when in prod, don't be outputting to console.
  if (process.env.NODE_ENV === 'production') {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="/about-me" element={<AboutMe />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/Education" element={<Education />} />
        <Route exact path="/Projects" element={<Projects />} />

        <Route path="*" element={<Navigate to="/about-me" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
