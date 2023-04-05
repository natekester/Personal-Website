import styles from './AboutMe.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

function AboutMe() {
  return (
      <div className={styles.header}>
        <h1> Hi Im Nate</h1>
        <nav>
          <NavLink className={styles.button} to="/">
            i am professional and stuff
          </NavLink>
        </nav>
      </div>
  );
}

export default AboutMe;
