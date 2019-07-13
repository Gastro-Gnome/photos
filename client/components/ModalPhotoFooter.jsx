import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/ModalPhotoFooter.css';

const ModalPhotoFooter = ({ currentPhoto, quantity, businessId }) => (
  <div className={styles.modalPhotoFooter}>
    <a className={styles.seeAll} href={`/biz_photos/${businessId}`}>
      <span className={styles.svg}>
        <svg id="18x18_grid" height="18" viewBox="0 0 18 18" width="18">
          <path d="M10 15v-5h5v5h-5zm0-12h5v5h-5V3zm-7 7h5v5H3v-5zm0-7h5v5H3V3z" />
        </svg>
      </span>
      Browse all
    </a>
    <span className={styles.count}>{`${currentPhoto} of ${quantity}`}</span>
    <span className={styles.share}>
      <div className={styles.seeAll}>
        <span className={styles.svg}>
          <svg id="18x18_share" height="18" viewBox="0 0 18 18" width="18">
            <path d="M17.714 6.43L13 10.356v-3.03c-1 0-5.097 1.47-6.286 3.62.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 3.93zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z" />
          </svg>
        </span>
        Share
      </div>
      <span className={styles.svg}>
        <svg id="18x18_flag" height="18" viewBox="0 0 18 18" width="18">
          <path d="M6 10V3c4.976 1.098 4.024-1 8 0v7c-4.024-.976-3.024 1.024-8 0zM4 2h1v14H4V2z" />
        </svg>
      </span>
    </span>
  </div>
);

export default ModalPhotoFooter;

ModalPhotoFooter.propTypes = {
  currentPhoto: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  businessId: PropTypes.string.isRequired,
};
