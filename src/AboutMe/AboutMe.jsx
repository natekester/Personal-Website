import styles from './AboutMe.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header';

function AboutMe() {
  return (
    <>
      <Header />

      <div className={styles.header}>
        <h1> Hi Im Nate</h1>
        <nav>
          <Link className={styles.button} to="/">
            i am professional and stuff
          </Link>
        </nav>
      </div>
    </>
  );
}

export default AboutMe;
