import TimelineSegment from '../../shared-components/TimelineSegment';
import styles from './UCSD.module.css';
import React from 'react';

function UCSD() {
  const UCSDLogo = (
    <img className={styles.ucsdImg} src="ucsd.png" alt="ucsd logo" />
  );

  const UCSDDesc =
    'UCSD Courses - Object Oriented Programming  | Data Structures Fundamentals | Algorithmic Design and Techniques - These courses provided a strong CS fundamental base, with excellent hands on coding';

  return (
    <TimelineSegment
      time="Apr - Jul 2020"
      imageElement={UCSDLogo}
      title="UCSD - Multiple CS Courses"
      description={UCSDDesc}
    ></TimelineSegment>
  );
}

export default UCSD;
