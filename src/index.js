import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App></App>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);