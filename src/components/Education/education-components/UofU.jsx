import TimelineSegment from '../../shared-components/TimelineSegment';
import styles from './UofU.module.css';
import React from 'react';

function UofU() {
  const UofULogo = (
    <img className={styles.uofuImg} src="uofu.png" alt="UofU logo" />
  );

  const UofUDesc =
    'Provided me a great educational base for technical writing, Math, and Engineering practices';

  return (
    <TimelineSegment
      time="2011 - 2015"
      imageElement={UofULogo}
      title="B.S. Materials Engineering"
      description={UofUDesc}
    ></TimelineSegment>
  );
}

export default UofU;
