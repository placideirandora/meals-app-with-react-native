import React, { useState, createContext, useEffect, useContext } from 'react';

import { LocationContext } from '../../location/locationContext';
import { restaurantsRequest, restaurantsTransform } from './restaurantService';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const fetchRestaurants = async (place) => {
    try {
      setLoading(true);

      const data = await restaurantsRequest(place);
      const transformedData = restaurantsTransform(data);

      setRestaurants(transformedData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      fetchRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, loading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
