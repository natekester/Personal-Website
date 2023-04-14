import React from 'react';
import styles from './GitHubButton.module.css';

function GitHubButton() {
  return (
    <a
      className={styles.GitHubButton}
      href="https://github.com/natekester/Personal-Website"
      // className={styles.GitHubButton}
    >
      <img src="github.png" className={styles.githubLogo} />

      <h1>See This Websites Github</h1>
    </a>
  );
}
export default GitHubButton;
