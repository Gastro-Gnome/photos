import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const businessId = 'archive-bar-and-kitchen-san-francisco';

ReactDOM.render(<App businessId={businessId} />, document.getElementById('photos'));
