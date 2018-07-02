import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cars from './components/cars/Cars';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Cars />, document.getElementById('root'));
registerServiceWorker();
