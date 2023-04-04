import styles from "./TricksyHobbitses.module.css"
import {  Link } from "@reach/router"

function TricksyHobbits() {
  return (
    <div className={styles.header}>
        <h1> I see you are a tricksy hobbits, looking for other routes....</h1>
        <nav>
            <Link classname={styles.button} to="/">Can I interest you in potatoes?</Link>
        </nav>
    </div>
  );
}

export default TricksyHobbits;