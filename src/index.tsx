import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Worker from './worker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Worker.unregister();


