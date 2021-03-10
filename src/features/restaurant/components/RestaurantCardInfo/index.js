import React from 'react';
import { Text } from 'react-native';
import { SvgXml } from 'react-native-svg';

import {
  RestaurantCard,
  RestaurantCardCover,
  Title,
  Address,
  Rating,
  IconsContainer,
  RestaurantTypeImage,
  RightIconsContainer,
} from './RestaurantCardInfoElements';
import star from '../../../../../assets/star';
import open from '../../../../../assets/open';

const RestaurantCardInfo = ({ restaurant = {} }) => {
  const {
    name = 'Sundowner',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['https://picsum.photos/400'],
    address = '50 KG 23 St',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Title>{name}</Title>
        <IconsContainer>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))}
          </Rating>
          <RightIconsContainer>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            {isClosedTemporarily && <Text>Closed</Text>}
            <RestaurantTypeImage source={{ uri: icon }} />
          </RightIconsContainer>
        </IconsContainer>
        <Address>{address}</Address>
      </RestaurantCard>
    </>
  );
};

export default RestaurantCardInfo;
