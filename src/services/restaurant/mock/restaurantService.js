import camelize from 'camelize';

import { mocks } from './index';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      setTimeout(() => {
        reject('Location not found');
      }, 5000);
    } else {
      setTimeout(() => {
        resolve(mock);
      }, 5000);
    }
  });
};

export const restaurantsTransform = (data) => {
  const mappedData = data.results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  const newData = camelize(mappedData);

  return newData;
};
