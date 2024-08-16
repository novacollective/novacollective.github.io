import {
  HashRouter as Router, Routes, Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import ArtistPage from './components/pages/ArtistPage';
import { ArtistsProvider } from './ArtistsContext';

const App = () => (
  <>
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
  </>
);

export default App;
