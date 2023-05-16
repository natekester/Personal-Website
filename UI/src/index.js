import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// when in prod, don't be outputting to console.
if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
