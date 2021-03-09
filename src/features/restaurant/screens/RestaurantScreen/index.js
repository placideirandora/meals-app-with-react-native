import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

import RestaurantCardInfo from '../../components/RestaurantCardInfo';
import {
  SafeArea,
  SearchContainer,
  RestaurantListContainer,
} from './RestaurantScreenElements';

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar onChangeText={handleChangeSearch} value={searchQuery} />
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantCardInfo />
        </RestaurantListContainer>
      </SafeArea>
    </>
  );
};

export default RestaurantScreen;
