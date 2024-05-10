import TimelineSegment from '../../shared-components/TimelineSegment';
import styles from './Pluralsight.module.css';
import React from 'react';

function Pluralsight() {
  const pluralsightImg = (
    <img
      className={styles.pluralsightImg}
      src="pluralsight.png"
      alt="A picture of what I look like. "
    />
  );

  const pluralsightDesc =
    'At Pluralsight I have created tooling to provide an entirely custom assessment experience. I enjoyed the opportunity to train every member of my team, implement new documentation practices, testing patterns, and push sustainable clean code practices.';

  return (
    <TimelineSegment
      time="Feb 2021 - Present"
      imageElement={pluralsightImg}
      title="Software Engineer III (Remote) - Pluralsight"
      description={pluralsightDesc}
    ></TimelineSegment>
  );
}

export default Pluralsight;
