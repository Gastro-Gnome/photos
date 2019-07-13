import React from 'react';
import PhotoBox from './PhotoBox';

const ModalPhotoDetails = ({ photo }) => (
  <div className="photo-details">
    <div className="user">
      <div className="media-avatar">
        <PhotoBox use="photo-profile" imageId={photo.user_photo_id} />
      </div>
      <div className="media-story">
        <div className="user-name">{'Joe Schmo'}</div>
        <div className="user-stats">
          <span className="friend-count">
            <svg id="18x18_friends" height="18" viewBox="0 0 18 18" width="18">
              <g>
                <path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                <path d="M15.904 9.43l-2.098 4.697a.89.89 0 0 1-.806.498.89.89 0 0 1-.806-.498L10.096 9.43a.902.902 0 0 1 .806-1.305h4.195c.67 0 1.106.705.807 1.305zM13 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" opacity=".502" />
              </g>
            </svg>
            69
          </span>
          <span className="review-count">
            <svg id="18x18_review" height="18" viewBox="0 0 18 18" width="18">
              <path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.55L6.526 12.7 7 9.934 5 7.977l2.766-.404L8.97 4.7l1.264 2.873L13 7.977l-2 1.957.495 2.71z" />
            </svg>
            420
          </span>
        </div>
      </div>
    </div>
    <div className="media-container">
      <div className="caption">{photo.caption}</div>
      <div className="photo-upload-date">{'07/12/2019'}</div>
      <div className="media-info">
        <p>Was this photo ...?</p>
        <div>
          <div className="helpful-btn">
            <span>
              <svg id="18x18_arrow_up" height="18" viewBox="0 0 18 18" width="18">
                <path d="M15 10L9 3l-6 7h4v5h4v-5h4z" />
              </svg>
            </span>
            <span>Helpful</span>
          </div>
          <div className="helpful-btn">
            <span>
              <svg id="18x18_arrow_down" height="18" viewBox="0 0 18 18" width="18">
                <path d="M3 8l6 7 6-7h-4V3H7v5H3z" />
              </svg>
            </span>
            <span>Not Helpful</span>
          </div>
        </div>
      </div>
      <div className="reservation">
        <span>
          <svg id="18x18_reservation" height="18" viewBox="0 0 18 18" width="18">
            <path d="M13.6 16H4.4C3.077 16 2 14.88 2 13.5v-9C2 3.12 3.077 2 4.4 2H5a1 1 0 0 1 2 0h4a1 1 0 0 1 2 0h.6C14.923 2 16 3.12 16 4.5v9c0 1.38-1.077 2.5-2.4 2.5zM15 7H3v6.5c0 .828.627 1.5 1.4 1.5h9.2c.773 0 1.4-.672 1.4-1.5V7zm-5 3h3v3h-3v-3z" />
          </svg>
        </span>
        <span>Make a Reservation</span>
      </div>
    </div>
  </div>
);

export default ModalPhotoDetails;
