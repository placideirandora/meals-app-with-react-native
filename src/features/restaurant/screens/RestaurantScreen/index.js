import React, { useState, useContext } from 'react';
import { Searchbar } from 'react-native-paper';

import RestaurantCardInfo from '../../components/RestaurantCardInfo';
import {
  SearchContainer,
  RestaurantListContainer,
  LoadingSpinner,
} from './restaurantScreenElements';
import { SafeArea } from '../../../../components/utils/SafeArea';
import { RestaurantsContext } from '../../../../services/restaurant/mock/restaurantContext';

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeSearch = (query) => setSearchQuery(query);

  const { loading, restaurants } = useContext(RestaurantsContext);

  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar onChangeText={handleChangeSearch} value={searchQuery} />
        </SearchContainer>
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
