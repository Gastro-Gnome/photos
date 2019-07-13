import React from 'react';
import PropTypes from 'prop-types';
import PhotoBox from './PhotoBox';
import styles from './style/Photo.css';

const Photo = ({
  emphasis,
  position,
  image,
  openModal,
  mouseOver,
  mouseLeave,
}) => (
  <div
    className={emphasis ? styles.emphasis : styles.photo}
    onMouseOver={() => mouseOver(position)}
    onMouseLeave={() => mouseLeave(position)}
    onFocus={() => {}}
    onClick={() => openModal(image)}
    onKeyPress={() => openModal(image)}
    role="button"
    tabIndex="-1"
  >
    {image
      && (
        <div className={styles.photoContainer}>
          <PhotoBox use="main" imageId={image.photo_id} />
        </div>
      )
    }
    {image
      && emphasis
      && (
        <div className={styles.photoBoxOverlay}>
          {image.user_id
            && (
              <div className={styles.mediaAvatar}>
                <PhotoBox use="profile" imageId={image.user_photo_id} />
              </div>
            )
          }
          <div className={styles.mediaStory}>
            <a className={styles.photoDesc} href="google.com">
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
  emphasis: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
    PropTypes.bool,
  ]),
  openModal: PropTypes.func.isRequired,
  mouseOver: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
};

Photo.defaultProps = {
  image: false,
};
