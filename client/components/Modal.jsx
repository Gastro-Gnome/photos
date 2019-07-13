import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ modalContent }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      {modalContent}
    </div>
  </div>
);

export default Modal;

Modal.propTypes = {
  modalContent: PropTypes.node.isRequired,
};
