import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.flexboxContainer}>
        <h1 className={styles.nate}>Nate Kester</h1>
        <h2 className={styles.title}>Full Stack Engineer</h2>
        <div className={styles.linksContainer}>
          <a className={styles.email} href="mailto:nate.d.kester@gmail.com">
            nate.d.kester@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/nathan-kester-5512b193/">
            <img src="linkedinIcon.png" className={styles.linkedin} />
          </a>
        </div>
        <nav className={styles.tabs}>
          <NavLink
            className={(isActive) =>
              isActive.isActive ? styles.activeTab : styles.tab
            }
            to="/about-me"
          >
            About Me
          </NavLink>
          <NavLink
            className={(isActive) =>
              isActive.isActive ? styles.activeTab : styles.tab
            }
            to="/career"
          >
            Career
          </NavLink>
          <NavLink
            className={(isActive) =>
              isActive.isActive ? styles.activeTab : styles.tab
            }
            to="/education"
          >
            Education
          </NavLink>
          <NavLink
            className={(isActive) =>
              isActive.isActive ? styles.activeTab : styles.tab
            }
            to="/projects"
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
