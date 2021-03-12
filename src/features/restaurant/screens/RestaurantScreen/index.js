import React, { useContext } from 'react';

import RestaurantCardInfo from '../../components/RestaurantCardInfo';
import {
  RestaurantListContainer,
  LoadingSpinner,
} from './restaurantScreenElements';
import { SafeArea } from '../../../../components/utils/SafeArea';
import { RestaurantContext } from '../../../../services/restaurant/mock/restaurantContext';
import Search from '../../components/Search';

const RestaurantScreen = () => {
  const { loading, restaurants } = useContext(RestaurantContext);

  return (
    <>
      <SafeArea>
        <Search />
        {loading ? (
          <LoadingSpinner animating={true} color="#DB5A42" size="large" />
        ) : (
          <RestaurantListContainer
            data={restaurants}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <RestaurantCardInfo restaurant={item} />}
          />
        )}
      </SafeArea>
    </>
  );
};

export default RestaurantScreen;
