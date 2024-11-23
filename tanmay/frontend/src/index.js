import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes'; // Ensure routes.js exists in the src folder
//import './index.css'; // Optional: For global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
