import Title from '../shared-components/Title';
import styles from './AboutMe.module.css';
import React from 'react';

function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <img
        className={styles.myFace}
        src="myfaceEdit.png"
        alt="A picture of what I look like. "
      />
      <div className={styles.textContainer}>
        <Title title="Hi! I'm Nate" />
        <h4 className={styles.text}>
          {' '}
          I am a Full Stack Software Engineer at Pluralsight. I started out my
          Engineering in Manufacturing, utilizing code to solve manufacturing
          problems. I transitioned to Software Engineering in Tech, and have
          loved every moment of it, carrying over all the quality lessons. I
          work mainly in Python and Javascript, but I believe in using the right
          tool for the job. Backend Code is my passion, but I believe in being
          well rounded.
        </h4>
        <h4 className={styles.text}>
          As for hobbies - I love 3D printing, photography, and have recently
          found a passion for learning music and guitar.
        </h4>
      </div>
    </div>
  );
}

export default AboutMe;