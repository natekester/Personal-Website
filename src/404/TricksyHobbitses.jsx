import styles from './TricksyHobbitses.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header';

function TricksyHobbits() {
  return (
    <>
    <Header />

    <div className={styles.header}>
      <h1> I see you are a tricksy hobbits, looking for other routes....</h1>
      <nav>
        <NavLink className={styles.button} to="/about-me">
          Can I interest you in potatoes?
        </NavLink>
      </nav>
    </div>
    </>
  );
}

export default TricksyHobbits;
