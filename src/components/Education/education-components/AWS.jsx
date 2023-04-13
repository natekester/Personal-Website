import TimelineSegment from '../../shared-components/TimelineSegment';
import styles from './AWS.module.css';
import React from 'react';

function AWS() {
  const AWSCert = (
    <img className={styles.hexcelImg} src="hexcel.png" alt="Hexcel Logo" />
  );

  const AWSDesc =
    'Using “A Cloud Guru” course provided me with a deeper and hands on experience understanding how Cloud can be utilized, the costs associated, and to be a better developer';

  return (
    <TimelineSegment
      time="Feb 2022"
      imageElement={AWSCert}
      title="AWS - Practitioner Certification"
      description={AWSDesc}
    ></TimelineSegment>
  );
}

export default AWS;
