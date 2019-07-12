import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import Nav from './Nav';
import PhotosFooter from './PhotosFooter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessId: 'archive-bar-and-kitchen-san-francisco',
      photos: [],
      currentPhoto: 0,
    };
    this.scroll = this.scroll.bind(this);
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

  render() {
    const { photos, currentPhoto, businessId } = this.state;
    return (
      <div className="showcase-container">
        <div className="showcase-container_inner">
          <PhotoCarousel photos={photos} currentPhoto={currentPhoto} />
          <Nav direction="nav-left" clickHandler={this.scroll} />
          <Nav direction="nav-right" clickHandler={this.scroll} />
        </div>
        <PhotosFooter quantity={photos.length} businessId={businessId} />
      </div>
    );
  }
}

export default App;
