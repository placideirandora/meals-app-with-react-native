import React, { useState, createContext, useEffect, useMemo } from 'react';

import { restaurantsRequest, restaurantsTransform } from './restaurantService';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => (
  <RestaurantsContext.Provider
    value={{ restaurants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }}
  >
    {children}
  </RestaurantsContext.Provider>
);
