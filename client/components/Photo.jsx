import React from 'react';
import PhotoBox from './PhotoBox';

const Photo = ({ location, image }) => (
  <div className={`photo photo-${location}`}>
    <div className="photo-container">
      <PhotoBox use="photo-main" imageId={image.photo_id} />
    </div>
    <div className="photo-box-overlay">
      {image.user_id
        && (
          <div className="media-avatar">
            <PhotoBox use="photo-profile" imageId={image.user_photo_id} />
          </div>
        )
      }
      <div className="media-story">
        <a className="photo-desc" href="google.com">
          {'Photo of Archive Bar & Kitchen - San Francisco, CA, United States'}
        </a>
      </div>
    </div>
  </div>
);

export default Photo;
