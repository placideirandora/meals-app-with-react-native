import React, { useState, createContext, useEffect, useCallback } from 'react';

import { locationRequest, locationTransform } from './locationService';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('San Francisco');
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const initSearchLocation = (searchKeyword) => {
    setLoading(true);
    setKeyword(searchKeyword);
  };

  const fetchLocation = useCallback(async () => {
    try {
      const data = await locationRequest(keyword.toLowerCase());
      const transformedData = locationTransform(data);

      setLocation(transformedData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [keyword]);

  // TODO: LOOK INTO WHY FETCH LOCATION FUNCTION IS BEING RUN TWICE

  useEffect(() => {
    fetchLocation();
  }, [keyword, fetchLocation]);

  return (
    <LocationContext.Provider
      value={{
        loading,
        location,
        search: initSearchLocation,
        error,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
