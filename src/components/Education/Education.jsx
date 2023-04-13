import React from 'react';
import Title from '../shared-components/Title';
import UofU from './education-components/UofU';
import AWS from './education-components/AWS';
import CS50 from './education-components/CS50';
import UCSD from './education-components/UCSD';
import styles from './Education.module.css';

function Education() {
  return (
    <div className={styles.Education}>
      <Title className={styles.title1} title="University of Utah" />
      <UofU />
      <Title className={styles.title} title="Software Certification" />
      <AWS />
      <CS50 />
      <UCSD />
    </div>
  );
}

export default Education;
