import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './scss/main.scss';
import App from './components/App/App';

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" />} />
        <Route path="/:lng/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
