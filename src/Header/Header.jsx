import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.flexboxContainer}>
        <h1 className={styles.nate}>Nate Kester</h1>
        <h2 className={styles.title}>Full Stack Engineer</h2>
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
