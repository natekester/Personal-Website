import styles from './TricksyHobbitses.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header';

function TricksyHobbits() {
  return (
    <>
    <Header />

    <div className={styles.header}>
      <h1> I see you are a tricksy hobbits, looking for other routes....</h1>
      <nav>
        <Link className={styles.button} to="/">
          Can I interest you in potatoes?
        </Link>
      </nav>
    </div>
    </>
  );
}

export default TricksyHobbits;
