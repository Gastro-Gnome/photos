import React from 'react';
import PhotoCarousel from './PhotoCarousel';

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
          {/* <div className="nav nav-left" />
          <div className="nav nav-right" /> */}
        </div>
        <div className="photos-footer" />
      </div>
    );
  }
}

export default App;
