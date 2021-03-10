import camelize from 'camelize';

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

const restaurantsTransform = (data) => camelize(data);

restaurantsRequest()
  .then(restaurantsTransform)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
