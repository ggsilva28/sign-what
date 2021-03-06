import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.scss';

const rootElement: any = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)