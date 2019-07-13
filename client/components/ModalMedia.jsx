import React from 'react';
import PhotoBox from './PhotoBox';
import ModalPhotoFooter from './ModalPhotoFooter';
import Nav from './Nav';
import ModalPhotoDetails from './ModalPhotoDetails';

const ModalMedia = ({
  photo,
  currentPhoto,
  quantity,
  modalScroll
}) => (
  <div className="modal-container">
    <div clasName="modal-photo">
      <PhotoBox use={'modal'} imageId={photo.photo_id}  />
      <ModalPhotoFooter
        currentPhoto={currentPhoto}
        quantity={quantity}
        businessId={photo.business_id}
      />
      <Nav direction={'mod-left'} clickHandler={modalScroll} />
      <Nav direction={'mod-right'} clickHandler={modalScroll} />
    </div>
    <div className="details-container">
      <ModalPhotoDetails photo={photo} />
      <div className="ad">
        AD HERE
      </div>
    </div>
  </div>
);

export default ModalMedia;
