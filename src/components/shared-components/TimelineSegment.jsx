import React from 'react';
import styles from './TimelineSegment.module.css';
import PropTypes from 'prop-types';

function TimelineSegment({ time, imageElement, title, description }) {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeImgContainer}>
        <h5 className={styles.time}>{time}</h5>
        <div className={styles.imageContainer}>{imageElement}</div>
      </div>
      <div className={styles.dot} />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <h4 className={styles.title}>{description}</h4>
      </div>
    </div>
  );
}

TimelineSegment.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageElement: PropTypes.element.isRequired,
};

export default TimelineSegment;
