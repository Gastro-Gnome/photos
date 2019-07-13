import React from 'react';
import Modal from 'react-modal';
import PhotoCarousel from './PhotoCarousel';
import Nav from './Nav';
import PhotosFooter from './PhotosFooter';
import ModalMedia from './ModalMedia';
import styles from './style/App.css';

Modal.setAppElement(document.getElementById('app'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessId: props.businessId || 'archive-bar-and-kitchen-san-francisco',
      photos: [],
      currentPhoto: 0,
      modalIsOpen: false,
      modalPhoto: 0,
    };
    this.scroll = this.scroll.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const { businessId } = this.state;
    fetch(`/biz_photos/${businessId}`, {
      method: 'GET',
    }).then(res => res.json())
      .then(res => this.setState({ photos: res }))
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
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          // style={{ overlay: { zIndex: 10 } }}
        >
          <ModalMedia
            closeModal={this.closeModal}
            photo={photos[modalPhoto]}
            currentPhoto={modalPhoto}
            quantity={photos.length}
            modalScroll={this.modalScroll}
          />
        </Modal> */}
      </div>
    );
  }
}

export default App;
