import TimelineSegment from '../../shared-components/TimelineSegment';
import styles from './Moxtek.module.css';
import React from 'react';

function Moxtek() {
  const MoxtekLogo = (
    <img className={styles.moxtekImg} src="moxtek.png" alt="moxtek logo" />
  );

  const moxtekDesc =
    'My responsibilities were around reducing defects. I did so by discovering better practices, creating technical documentation, and writing software tooling. I created C# applications that monitored tooling conditions, and Python tooling to analyze root cause for repetitive defects.';

  return (
    <TimelineSegment
      time="Sept 2016 - Jul 2018"
      imageElement={MoxtekLogo}
      title="Quality Engineer - Moxtek"
      description={moxtekDesc}
    ></TimelineSegment>
  );
}

export default Moxtek;
