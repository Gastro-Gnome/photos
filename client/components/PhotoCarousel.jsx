import React from 'react';
import PhotoSet from './PhotoSet';

const PhotoCarousel = ({ photos }) => (
  <div className="photo-carousel">
    {/* <PhotoSet position="prev" /> */}
    <PhotoSet position="current" set={photos.slice(0, 3)} />
    {/* <PhotoSet position="next" /> */}
  </div>
);

export default PhotoCarousel;
