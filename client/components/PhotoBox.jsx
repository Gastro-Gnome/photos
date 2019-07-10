import React from 'react';

const PhotoBox = ({use}) => (
  <div className="photo-box">
    <a href="www.google.com">
      <img className={use} src="https://source.unsplash.com/random?food" alt="Food Pic" />
    </a>
  </div>
);

export default PhotoBox;
