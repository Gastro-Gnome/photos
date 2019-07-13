import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import styles from './style/PhotoSet.css';

class PhotoSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      middle: true,
      right: false,
    };
    this.addEmphasis = this.addEmphasis.bind(this);
    this.removeEmphasis = this.removeEmphasis.bind(this);
  }

  addEmphasis(position) {
    if (position === 'left') {
      this.setState({
        left: true,
        middle: false,
        right: false,
      });
    }
    if (position === 'right') {
      this.setState({
        left: false,
        middle: false,
        right: true,
      });
    }
  }

  removeEmphasis() {
    this.setState({
      left: false,
      middle: true,
      right: false,
    });
  }

  render() {
    const { set, openModal } = this.props;
    const { left, middle, right } = this.state;
    return (
      <div className={styles.photoSet}>
        <Photo
          emphasis={left}
          position="left"
          image={set[0]}
          openModal={openModal}
          mouseOver={this.addEmphasis}
          mouseLeave={this.removeEmphasis}
        />
        <Photo
          emphasis={middle}
          position="middle"
          image={set[1]}
          openModal={openModal}
          mouseOver={() => {}}
          mouseLeave={() => {}}
        />
        <Photo
          emphasis={right}
          position="right"
          image={set[2]}
          openModal={openModal}
          mouseOver={this.addEmphasis}
          mouseLeave={this.removeEmphasis}
        />
      </div>
    );
  }
}

export default PhotoSet;

PhotoSet.propTypes = {
  set: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]))).isRequired,
  openModal: PropTypes.func.isRequired,
};
