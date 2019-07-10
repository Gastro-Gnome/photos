import React from 'react';
import PhotoSet from './PhotoSet.jsx';

const PhotoCarousel = () => (
  <div className="photo-carousel">
    {/* <PhotoSet position="prev" /> */}
    <PhotoSet position="current" />
    {/* <PhotoSet position="next" /> */}
  </div>
);

export default PhotoCarousel;
