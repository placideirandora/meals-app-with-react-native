import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

import RestaurantCardInfo from '../../components/RestaurantCardInfo';
import {
  SearchContainer,
  RestaurantListContainer,
} from './restaurantScreenElements';
import { SafeArea } from '../../../../components/utils/SafeArea';

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar onChangeText={handleChangeSearch} value={searchQuery} />
        </SearchContainer>
        <RestaurantListContainer
          data={[
            { name: 'Card 1' },
            { name: 'Card 2' },
            { name: 'Card 3' },
            { name: 'Card 4' },
          ]}
          keyExtractor={(item) => item.name}
          renderItem={() => <RestaurantCardInfo />}
        />
      </SafeArea>
    </>
  );
};

export default RestaurantScreen;
