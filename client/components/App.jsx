import React from 'react';
import PhotoCarousel from './PhotoCarousel.jsx';

<<<<<<< HEAD
const App = () => (
  <div>
   Hello
  </div>
);
=======
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
          {/* <div className="top-shelf-grey" /> */}
          <PhotoCarousel />
          {/* <div className="nav nav-left" />
          <div className="nav nav-right" /> */}
        </div>
        <div className="photos-footer">Footer</div>
      </div>
    );
  }
}
>>>>>>> setup basic layout for service

export default App;
