import styles from "./Header.module.css"
import { Router, Link } from "@reach/router"


function Header() {
  return (
    <div className={styles.header}>

      <h1 className={styles.natekester} >Nate Kester</h1>
      <h5 className={styles.title}>I am an Engineer who believes in a culture of quality</h5>

      <nav>
        <Link className={styles.button} to="/experience">Professional Experience</Link>
        <Link className={styles.button} to="/philosophy">Professional Philosophy</Link>
        <Link className={styles.button} to="/personal">Personal</Link>
       </nav>
    </div>
  );
}

export default Header;