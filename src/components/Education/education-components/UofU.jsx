import TimelineSegment from '../../shared-components/TimelineSegment';
import styles from './UofU.module.css';
import React from 'react';

function UofU() {
  const UofULogo = (
    <img className={styles.hexcelImg} src="hexcel.png" alt="Hexcel Logo" />
  );

  const UofUDesc = '';

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
