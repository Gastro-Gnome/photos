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
  }

  componentDidMount() {
    const { businessId } = this.state;
    fetch(`/biz_photos/${businessId}`, {
      method: 'GET',
    }).then(res => res.json())
      .then(res => this.setState({ photos: res }))
      .catch(err => console.log(err));
  }

  render() {
    const { photos, currentPhoto } = this.state;
    return (
      <div className="showcase-container">
        <div className="showcase-container_inner">
          <PhotoCarousel photos={photos} currentPhoto={currentPhoto} />
          <Nav direction="nav-left" />
          <Nav direction="nav-right" />
        </div>
        <PhotosFooter />
      </div>
    );
  }
}

export default App;
