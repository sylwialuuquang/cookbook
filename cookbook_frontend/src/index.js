import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AuthService from './components/authService'

ReactDOM.render(
  <React.StrictMode>
    <AuthService />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
