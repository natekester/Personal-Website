import TimelineSegment from '../../shared-components/TimelineSegment';
import styles from './CS50.module.css';
import React from 'react';

function CS50() {
  const harvardLogo = (
    <img className={styles.hexcelImg} src="hexcel.png" alt="Hexcel Logo" />
  );

  const cs50Desc =
    'Harvard CS50 - web development certificate - Learned fullstack development culminating in a React, SQL, and Python fullstack capstone project:  video example and code';

  return (
    <TimelineSegment
      time="Dec 2020"
      imageElement={harvardLogo}
      title="Harvard - CS50 Web Development"
      description={cs50Desc}
    ></TimelineSegment>
  );
}

export default CS50;
