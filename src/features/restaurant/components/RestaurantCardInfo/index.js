import React from 'react';

import {
  RestaurantCard,
  RestaurantCardCover,
  Title,
} from './RestaurantCardInfoElements';

const RestaurantCardInfo = ({ restaurant = {} }) => {
  const {
    name = 'Sundowner',
    // icon,
    photos = ['https://picsum.photos/400'],
    // address = '50 KG 23 St',
    // isOpenNow = true,
    // rating = 4,
    // isClosedTemporarily,
  } = restaurant;

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    </>
  );
};

export default RestaurantCardInfo;
