import React from 'react';

const PhotoBox = ({use, imageId }) => (
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
