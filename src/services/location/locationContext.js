import React, { useState, useEffect, createContext } from 'react';

import { locationRequest, locationTransform } from './locationService';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('san francisco');
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocation = async (searchKeyword) => {
    try {
      setLoading(true);
      setKeyword(searchKeyword);

      const data = await locationRequest(searchKeyword.toLowerCase());
      const transformedData = locationTransform(data);

      setLocation(transformedData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocation(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        loading,
        location,
        search: fetchLocation,
        error,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
