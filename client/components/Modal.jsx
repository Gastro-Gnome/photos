import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Modal.css';

const closeIcon = (
  <svg id="24x24_close" height="24" viewBox="0 0 24 24" width="24">
    <path d="M17.657 19.07L12 13.415 6.343 19.07 4.93 17.658 10.585 12 4.93 6.343 6.342 4.93 12 10.585l5.657-5.657L19.07 6.34 13.416 12l5.657 5.657-1.413 1.414z" />
  </svg>
);

const Modal = ({ modalIsOpen, onRequestClose, modalContent }) => (
  <div className={styles.modal}>
    {modalIsOpen
      && (
        <div className={styles.modalOverlay}>
          <div
            className="close-btn"
            onClick={onRequestClose}
            onKeyPress={onRequestClose}
            role="button"
            tabIndex="-1"
          >
            Close
            <span>{closeIcon}</span>
          </div>
          <div className={styles.modalContent}>
            {modalContent}
          </div>
        </div>
      )}
  </div>
);

export default Modal;

Modal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  modalContent: PropTypes.node.isRequired,
};
