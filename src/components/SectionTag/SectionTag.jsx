import React from 'react';
import styles from './SectionTag.module.css';

const SectionTag = ({ label, center = false }) => {
  return (
    <div className={`${styles.tag} ${center ? styles.center : ''}`}>
      <span>{label}</span>
    </div>
  );
};

export default SectionTag;