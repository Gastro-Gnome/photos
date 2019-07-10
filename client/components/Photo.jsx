import React from 'react';
import PhotoBox from './PhotoBox';

const Photo = ({location}) => (
  <div className={`photo photo-${location}`}>
    <div className="photo-container">
      <PhotoBox />
    </div>
    <div className="photo-box-overlay">
      <div className="media-avatar">
        <PhotoBox />
      </div>
      <div className="media-story">
        {/* <a className="photo-desc" href= >{}</a> */}
      </div>
    </div>
  </div>
);

export default Photo;
