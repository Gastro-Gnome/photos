import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import Nav from './Nav';
import PhotosFooter from './PhotosFooter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessId: 'archive-bar-and-kitchen-san-francisco',
      photos: testData,
      prev: [],
      current: [],
      next: [],
    };
  }

  componentDidMount() {
    const { businessId, photos } = this.state;
    fetch(`/biz_photos/${businessId}`, {
      method: 'GET',
    }).then(res => res.json())
      .then(res => this.setState({ photos: res }))
      .catch(err => console.log(err));
  }

  render() {
    const { photos } = this.state;
    return (
      <div className="showcase-container">
        <div className="showcase-container_inner">
          <PhotoCarousel photos={photos} />
          <Nav direction="nav-left" />
          <Nav direction="nav-right" />
        </div>
        <PhotosFooter />
      </div>
    );
  }
}

export default App;


const testData = [
  {
    business_id: 'archive-bar-and-kitchen-san-francisco',
    photo_id: '5L-GHeWFLKQvVJj3tvtUDA',
    caption: 'The famous Hearst Pizza!!!',
    label: 'food',
  },
  {
    business_id: 'archive-bar-and-kitchen-san-francisco',
    photo_id: 'Q6EQkRijW_GlT3OehV7DgQ',
    user_id: 'Z88N6qly3Dp5C06XbZ9IMQ',
    user_photo_id: 'aqRpjUsiZU2o0zERpND-1g',
    caption: 'Interior',
    label: 'inside',
  },
  {
    business_id: 'archive-bar-and-kitchen-san-francisco',
    photo_id: 'ilQ2HM6wDpV67FMtpxCziA',
    user_id: 'yfRPxK0Yq2Xmgw0ioCtHZQ',
    user_photo_id: 'EGUgJrpDKrvvJ0C9fcTJ9A',
    caption: 'Second time = burnt pizza',
    label: 'food',
  },
];
