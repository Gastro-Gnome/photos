import React from 'react';
import PropTypes from 'prop-types';
import PhotoBox from './PhotoBox';
import ModalPhotoFooter from './ModalPhotoFooter';
import Nav from './Nav';
import ModalPhotoDetails from './ModalPhotoDetails';
import styles from './styles/ModalMedia.css';

const ModalMedia = ({
  photo,
  currentPhoto,
  quantity,
  modalScroll,
}) => (
  <div className={styles.modalContainer}>
    <div className={styles.modalPhoto}>
      <PhotoBox use={'modal'} imageId={photo.photo_id}  />
      <ModalPhotoFooter
        currentPhoto={currentPhoto}
        quantity={quantity}
        businessId={photo.business_id}
      />
      <Nav direction={'mod-left'} clickHandler={modalScroll} />
      <Nav direction={'mod-right'} clickHandler={modalScroll} />
    </div>
    <div className={styles.detailsContainer}>
      <ModalPhotoDetails photo={photo} />
      <div className="ad">
        AD HERE
      </div>
    </div>
  </div>
);

export default ModalMedia;

ModalMedia.propTypes = {
  photo: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
    PropTypes.bool,
  ]),
  currentPhoto: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  modalScroll: PropTypes.func.isRequired,
};
ModalMedia.defaultProps = {
  photo: false,
};
