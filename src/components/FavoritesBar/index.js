import React from 'react';
import { ScrollView } from 'react-native';

import CompactRestaurantInfo from '../restaurant/CompactRestaurantInfo';
import {
  CompactContainer,
  FavoritesContainer,
  Title,
} from './favoritesBarElements';

const FavoritesBar = ({ favorites, onNavigateToDetails }) => {
  const handleNavigateToDetails = (restaurant) => {
    onNavigateToDetails('RestaurantDetail', {
      restaurant,
    });
  };

  return (
    <FavoritesContainer>
      {!favorites.length ? (
        <Title>No favorites. Create some!</Title>
      ) : (
        <Title>Favorites</Title>
      )}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <CompactContainer
              key={key}
              onPress={() => handleNavigateToDetails(restaurant)}
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </CompactContainer>
          );
        })}
      </ScrollView>
    </FavoritesContainer>
  );
};

export default FavoritesBar;
