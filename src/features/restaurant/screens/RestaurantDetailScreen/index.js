import React from 'react';

import { SafeArea } from '../../../../components/utils/SafeArea';
import RestaurantCardInfo from '../../components/RestaurantCardInfo';

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <>
      <SafeArea>
        <RestaurantCardInfo restaurant={restaurant} />
      </SafeArea>
    </>
  );
};

export default RestaurantDetailScreen;
