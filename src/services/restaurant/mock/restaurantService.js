import { mocks } from './index';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      setTimeout(() => {
        reject('Location not found');
      }, 10000);
    } else {
      setTimeout(() => {
        resolve(mock);
      }, 10000);
    }
  });
};
