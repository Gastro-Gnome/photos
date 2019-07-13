import React from 'react';
import PropTypes from 'prop-types';
import PhotoSet from './PhotoSet';
import styles from './styles/PhotoCarousel.css';

const PhotoCarousel = ({ photos, currentPhoto, openModal }) => (
  <div className={styles.photoCarousel}>
    <PhotoSet set={photos.slice(currentPhoto, currentPhoto + 3)} openModal={openModal} />
  </div>
);

export default PhotoCarousel;

PhotoCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]))).isRequired,
  currentPhoto: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};
