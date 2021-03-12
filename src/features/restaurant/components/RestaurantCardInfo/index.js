import React from 'react';
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
  TemporaryClosure,
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
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(5));

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
            {isClosedTemporarily && (
              <TemporaryClosure>Closed Temporarily</TemporaryClosure>
            )}
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
