import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GLobalStyles from './globo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GLobalStyles/>
    <App />
  </React.StrictMode>
);
