import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.js';
import SearchPage from './Pages/SearchPage.jsx'; 
import './index.css';
import GalleryPage from './Pages/GalleryPage.jsx';

const routing = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="searchPage" element={<SearchPage />} />

      <Route path="galleryPage" element={<GalleryPage />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);