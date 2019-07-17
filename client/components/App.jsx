import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import PhotoCarousel from './PhotoCarousel';
import Nav from './Nav';
import PhotosFooter from './PhotosFooter';
// import Modal from './Modal';
import ModalMedia from './ModalMedia';
import styles from './styles/App.css';
import modalStyle from './styles/modalStyle';

Modal.setAppElement(document.getElementById('app'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessId: props.businessId,
      photos: [],
      currentPhoto: 0,
      modalIsOpen: false,
      modalPhoto: 0,
    };
    this.scroll = this.scroll.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalScroll = this.modalScroll.bind(this);
  }

  componentDidMount() {
    const { businessId } = this.state;
    fetch(`photos/${businessId}`, {
      method: 'GET',
    }).then(res => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ photos: res })
      })
      .then(() => this.autoScroll())
      .catch(err => console.log(err));
  }

  scroll(direction) {
    const { currentPhoto, photos } = this.state;
    if (direction === 'left' && currentPhoto > 0) {
      this.setState({ currentPhoto: currentPhoto - 1 });
    }
    if (direction === 'right' && currentPhoto < photos.length - 4) {
      this.setState({ currentPhoto: currentPhoto + 1 });
    }
  }

  autoScroll() {
    setInterval(() => this.scroll('right'), 8000);
  }

  openModal(photo) {
    const { photos } = this.state;
    const clickedPhoto = photos.indexOf(photo);
    this.setState({
      modalIsOpen: true,
      modalPhoto: clickedPhoto,
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  modalScroll(direction) {
    console.log(direction);
    const { modalPhoto, photos } = this.state;
    if (direction === 'left' && modalPhoto > 0) {
      this.setState({ modalPhoto: modalPhoto - 1 });
    }
    if (direction === 'right' && modalPhoto < photos.length - 1) {
      this.setState({ modalPhoto: modalPhoto + 1 });
    }
  }

  render() {
    const {
      photos,
      currentPhoto,
      businessId,
      modalIsOpen,
      modalPhoto,
    } = this.state;
    return (
      <div className={styles.showcaseContainer}>
        <div className={styles.showcaseContainerInner}>
          <PhotoCarousel photos={photos} currentPhoto={currentPhoto} openModal={this.openModal} />
          <Nav direction="nav-left" clickHandler={this.scroll} />
          <Nav direction="nav-right" clickHandler={this.scroll} />
        </div>
        <PhotosFooter quantity={photos.length} businessId={businessId} />
        {/* <Modal
          modalIsOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          modalContent={<div>Hello</div>}
        /> */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}
        >
          <ModalMedia
            photo={photos[modalPhoto]}
            currentPhoto={modalPhoto}
            quantity={photos.length}
            modalScroll={this.modalScroll}
          />
        </Modal>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  businessId: PropTypes.string,
};
App.defaultProps = {
  businessId: 'archive-bar-and-kitchen-san-francisco',
};
