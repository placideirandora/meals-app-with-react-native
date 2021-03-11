import camelize from 'camelize';

import { mockImages, mocks } from './index';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      setTimeout(() => {
        reject('Location not found');
      }, 4000);
    } else {
      setTimeout(() => {
        resolve(mock);
      }, 4000);
    }
  });
};

export const restaurantsTransform = (data) => {
  const mappedData = data.results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  const newData = camelize(mappedData);

  return newData;
};
