import React from 'react';
import { Platform } from 'react-native';

import {
  CompactImage,
  CompactWebView,
  Item,
  RestaurantName,
} from './compactRestaurantInfoElements';

const isAndroid = Platform.OS === 'android';

const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <RestaurantName>{restaurant.name}</RestaurantName>
    </Item>
  );
};

export default CompactRestaurantInfo;
