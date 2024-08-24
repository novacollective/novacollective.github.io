import React, { useEffect } from 'react';
import {
  HashRouter as Router, Routes, Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import ArtistPage from './components/pages/ArtistPage';
import { ArtistsProvider } from './DatabaseContext';

const App = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      if (event.target.tagName === 'IMG') {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <ArtistsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="artists/:id" element={<ArtistPage />} />
          </Route>
        </Routes>
      </Router>
    </ArtistsProvider>
  );
};

export default App;
