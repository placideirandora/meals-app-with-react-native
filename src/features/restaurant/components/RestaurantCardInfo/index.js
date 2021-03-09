import React from 'react';
import { SvgXml } from 'react-native-svg';

import {
  RestaurantCard,
  RestaurantCardCover,
  Title,
  Address,
  Rating,
} from './RestaurantCardInfoElements';
import star from '../../../../../assets/star';

const RestaurantCardInfo = ({ restaurant = {} }) => {
  const {
    name = 'Sundowner',
    // icon,
    photos = ['https://picsum.photos/400'],
    address = '50 KG 23 St',
    // isOpenNow = true,
    rating = 4,
    // isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  console.log('RATING ARRAY: ', ratingArray);

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map((_, index) => (
            <SvgXml xml={star} width={20} height={20} key={index} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </RestaurantCard>
    </>
  );
};

export default RestaurantCardInfo;
