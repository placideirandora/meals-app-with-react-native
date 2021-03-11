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
} from './restaurantCardInfoElements';
import star from '../../../../../assets/star';
import open from '../../../../../assets/open';
import Spacer from '../../../../components/Spacer';

const RestaurantCardInfo = ({ restaurant }) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
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
            <Spacer variant="left.medium" />
            <RestaurantTypeImage source={{ uri: icon }} />
          </RightIconsContainer>
        </IconsContainer>
        <Address>{address}</Address>
      </RestaurantCard>
    </>
  );
};

export default RestaurantCardInfo;
