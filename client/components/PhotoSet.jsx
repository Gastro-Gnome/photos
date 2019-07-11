import React from 'react';
import Photo from './Photo';

const PhotoSet = ({ position, set }) => (
  <div className={`photo-set ${position}`}>
    <Photo location="left" image={set[0]} />
    <Photo location="middle" image={set[1]} />
    <Photo location="right" image={set[2]} />
  </div>

);

export default PhotoSet;
