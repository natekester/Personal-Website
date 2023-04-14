import TimelineSegment from '../../shared-components/TimelineSegment';
import styles from './Hexcel.module.css';
import React from 'react';

function Hexcel() {
  const HexcelLogo = (
    <img className={styles.hexcelImg} src="hexcel.png" alt="Hexcel Logo" />
  );

  const hexcelDesc =
    'At Hexcel I had the goal of creating quality aerospace parts and making processes more efficient. I built stringent quality practices, and implemented python statistical analyses to evaluate hundreds of processes in order to direct our team to areas of improvement.';

  return (
    <TimelineSegment
      time="Jul 2018 - Apr 2020"
      imageElement={HexcelLogo}
      title="Manufacturing Engineer - Hexcel"
      description={hexcelDesc}
    ></TimelineSegment>
  );
}

export default Hexcel;
