import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import PropTypes from 'prop-types';
import db from './firebase';

const ArtistsContext = createContext();

export function useArtists() {
  return useContext(ArtistsContext);
}

export function ArtistsProvider({ children }) {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArtists() {
      try {
        const querySnapshot = await getDocs(collection(db, 'artists'));
        const artistList = querySnapshot.docs.map((doc) => doc.data());
        setArtists(artistList);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchArtists();
  }, []);

  return (
    <ArtistsContext.Provider value={{ artists, loading }}>
      {children}
    </ArtistsContext.Provider>
  );
}

ArtistsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
