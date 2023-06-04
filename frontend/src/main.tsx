import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';

const clientIdKey = 'client_id';
const existingClientId = localStorage.getItem(clientIdKey);

if (!existingClientId) {
  const newClientId = Date.now().toString();
  localStorage.setItem(clientIdKey, newClientId);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
