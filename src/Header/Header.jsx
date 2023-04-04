import styles from "./Header.module.css"
import { Router, Link } from "@reach/router"


function Header() {
  return (
    <div className={styles.header}>

      <h1 className={styles.title} >Nate Kester</h1>
      <h2 className={styles.title}>Full Stack Engineer</h2>

      <div className={styles.tabs}>
        <Link className={styles.activeButton} to="/about-me">About Me</Link>
        <Link className={styles.activeButton} to="/career">Career</Link>
        <Link className={styles.activeButton} to="/education">Education</Link>
        <Link className={styles.activeButton} to="/Projects">Projects</Link>
      </div>
    </div>
  );
}

export default Header;