import React from 'react';
import PropTypes from 'prop-types';

const PhotoBox = ({ use, imageId }) => (
  <div className="photo-box">
    <a href="www.google.com">
      <img
        className={use}
        src={`https://zjthomas.s3-us-west-1.amazonaws.com/${use === 'photo-main' ? 'b' : ''}photo/${imageId}.jpg`}
        alt="Food Pic"
      />
    </a>
  </div>
);

export default PhotoBox;

PhotoBox.propTypes = {
  use: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
};
