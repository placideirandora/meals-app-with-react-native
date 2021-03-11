import camelize from 'camelize';

import { locations } from './locationMock';

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];

    if (!locationMock) {
      setTimeout(() => {
        reject('Location not found');
      }, 4000);
    } else {
      setTimeout(() => {
        resolve(locationMock);
      }, 4000);
    }
  });
};

export const locationTransform = (data) => {
  const formattedData = camelize(data);
  const {
    geometry: {
      location: { lat, lng },
    },
  } = formattedData.results[0];

  return { lat, lng };
};
