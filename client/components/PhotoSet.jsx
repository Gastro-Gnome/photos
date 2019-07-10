import React from 'react';
import Photo from './Photo.jsx';

const PhotoSet = ({position }) => (
  <div className={`photo-set ${position}`}>
    <Photo location="left" />
    <Photo location="middle" />
    <Photo location="right" />
  </div>

);

export default PhotoSet;
