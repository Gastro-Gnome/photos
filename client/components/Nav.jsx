import React from 'react';
import PropTypes from 'prop-types';

const left = (
  <svg id="48x48_chevron_left" height="48" viewBox="0 0 48 48" width="48">
    <path d="M29.414 5.992c.566 0 1.137.192 1.614.588 1.115.925 1.296 2.613.404 3.77L20.902 24l10.53 13.65c.892 1.156.71 2.844-.404 3.77-1.116.924-2.743.737-3.635-.42L15.57 25.675a2.76 2.76 0 0 1 0-3.35L27.394 6.998a2.548 2.548 0 0 1 2.02-1.008z" />
  </svg>
);

const right = (
  <svg id="48x48_chevron_right" height="48" viewBox="0 0 48 48" width="48">
    <path d="M18.586 42.008a2.518 2.518 0 0 1-1.614-.588c-1.115-.925-1.296-2.613-.404-3.77L27.098 24l-10.53-13.65c-.892-1.156-.71-2.844.404-3.77 1.116-.924 2.743-.737 3.635.42L32.43 22.325a2.76 2.76 0 0 1 0 3.35L20.606 41.002a2.548 2.548 0 0 1-2.02 1.008z" />
  </svg>
);

const Nav = ({ direction, clickHandler }) => (
  <div
    className={`nav ${direction}`} 
    onClick={() => clickHandler(direction.slice(4))}
    onKeyPress={() => clickHandler(direction.slice(4))}
    role="button"
    tabIndex="-1"
  >
    <span>{direction === 'nav-left' ? left : right}</span>
  </div>
);

export default Nav;

Nav.propTypes = {
  direction: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
