import React, { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { FavoritesContext } from '../../services/favorites/favoritesContext';
import { FavoriteButton } from './favoritesElements';

const Favorites = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(
    FavoritesContext
  );

  const isFavorite = favorites.find(
    (resto) => resto.placeId === restaurant.placeId
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(restaurant);
    } else {
      addToFavorites(restaurant);
    }
  };

  return (
    <FavoriteButton onPress={handleToggleFavorite}>
      <AntDesign
        name={isFavorite ? 'heart' : 'hearto'}
        size={24}
        color={isFavorite ? '#DB5A42' : '#fff'}
      />
    </FavoriteButton>
  );
};

export default Favorites;
