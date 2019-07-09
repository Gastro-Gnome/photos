import React from 'react';
import PhotoBox from './PhotoBox.jsx';

const Photo = () => (
  <div className="photo">
    <div className="photo-container">
      <PhotoBox />
    </div>
    <div className="photo-box-overlay">
      <div className="media-avatar">
        {/* <PhotoBox /> */}
      </div>
      <div className="media-story">
        {/* <a className="photo-desc" href= >{}</a> */}
      </div>
    </div>
  </div>
);

export default Photo;
