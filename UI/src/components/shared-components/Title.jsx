import React from 'react';
import styles from './Title.module.css';
import PropTypes from 'prop-types';

function Title({title}) {
  return (
    <h1 className={styles.title}>
        {title}
    </h1>
  );
}

Title.propTypes = {
    title: PropTypes.string.isRequired
  }

export default Title;
