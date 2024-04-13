// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client' instead of 'react-dom'
import { Provider } from 'react-redux';
import store from './app/store';

import App from './App';

const root = createRoot(document.getElementById('root')); // Use createRoot to create a root

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
