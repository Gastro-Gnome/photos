import React from 'react';
import PhotoBox from './PhotoBox';

const Photo = ({location}) => (
  <div className={`photo photo-${location}`}>
    <div className="photo-container">
      <PhotoBox use="photo-main" />
    </div>
    <div className="photo-box-overlay">
      <div className="media-avatar">
        <PhotoBox use="photo-profile" />
      </div>
      <div className="media-story">
        <a className="photo-desc" href="google.com">
          {'Photo of Archive Bar & Kitchen - San Francisco, CA, United States'}
        </a>
      </div>
    </div>
  </div>
);

export default Photo;
