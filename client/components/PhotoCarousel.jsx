import React from 'react';
import PropTypes from 'prop-types';
import PhotoSet from './PhotoSet';

const PhotoCarousel = ({ photos, currentPhoto }) => (
  <div className="photo-carousel">
    <PhotoSet
      position="prev"
      set={photos.slice((currentPhoto > 0 ? currentPhoto - 1 : 0), currentPhoto + 2)}
    />
    <PhotoSet position="current" set={photos.slice(currentPhoto, currentPhoto + 3)} />
    <PhotoSet position="next" set={photos.slice(currentPhoto + 1, currentPhoto + 4)} />
  </div>
);

export default PhotoCarousel;

PhotoCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]))).isRequired,
  currentPhoto: PropTypes.number.isRequired,
};
