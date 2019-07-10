import React from 'react';

const quantity = 488;
const businessID = 'archive-bar-and-kitchen-san-francisco';
const PhotosFooter = () => (
  <div className="photos-footer">
    <a className="see-all" href={`/biz_photos/${businessID}`}>
      <span className="grid-svg">
        <svg id="18x18_grid" height="18" viewBox="0 0 18 18" width="18">
          <path d="M10 15v-5h5v5h-5zm0-12h5v5h-5V3zm-7 7h5v5H3v-5zm0-7h5v5H3V3z" />
        </svg>
      </span>
      {`See all ${quantity}`}
    </a>
  </div>
);

export default PhotosFooter;
