import React from 'react';
import PropTypes from 'prop-types';
import PhotoBox from './PhotoBox';

const Photo = ({ location, image }) => (
  <div className={`photo photo-${location}`}>
    {image
      && (
        <div className="photo-container">
          <PhotoBox use="photo-main" imageId={image.photo_id} />
        </div>
      )
    }
    {image
      && (
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
              {image.caption ? image.caption : 'Photo of Archive Bar & Kitchen - San Francisco, CA, United States'}
            </a>
          </div>
        </div>
      )
    }
  </div>
);

export default Photo;

Photo.propTypes = {
  location: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
    PropTypes.bool,
  ]),
};

Photo.defaultProps = {
  image: false,
};
