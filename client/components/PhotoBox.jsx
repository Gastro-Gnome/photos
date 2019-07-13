import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/PhotoBox.css';

const PhotoBox = ({ use, imageId }) => (
  <div className={styles.photoBox}>
    <img
      className={`${styles.img} ${styles[use]}`}
      src={`https://zjthomas.s3-us-west-1.amazonaws.com/${use === 'main' ? 'b' : ''}photo/${imageId}.jpg`}
      alt="Food Pic"
    />
  </div>
);

export default PhotoBox;

PhotoBox.propTypes = {
  use: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
};
