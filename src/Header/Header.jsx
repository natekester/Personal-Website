import styles from "./Header.module.css"
import { Link } from "@reach/router"
import React from 'react';


function Header() {


  return (
    <div className={styles.header}>
      <div className={styles.flexboxContainer}>
        <h1 className={styles.nate} >Nate Kester</h1>
        <h2 className={styles.title}>Full Stack Engineer</h2>

        <div className={styles.tabs}>
          <Link className={styles.activeButton} to="/about-me">About Me</Link>
          <Link className={styles.activeButton} to="/career">Career</Link>
          <Link className={styles.activeButton} to="/education">Education</Link>
          <Link className={styles.activeButton} to="/Projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;