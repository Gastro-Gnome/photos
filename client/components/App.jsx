import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import Nav from './Nav';
import PhotosFooter from './PhotosFooter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      prev: [],
      current: [],
      next: [],
    };
  }

  render() {
    return (
      <div className="showcase-container">
        <div className="showcase-container_inner">
          <PhotoCarousel />
          <Nav direction="nav-left" />
          <Nav direction="nav-right" />
        </div>
        <PhotosFooter />
      </div>
    );
  }
}

export default App;
