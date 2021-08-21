import { TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';

import {
  RestaurantListContainer,
  LoadingSpinner,
} from './restaurantScreenElements';
import Search from '../../components/Search';
import FavoritesBar from '../../../../components/FavoritesBar';
import { SafeArea } from '../../../../components/utils/SafeArea';
import RestaurantCardInfo from '../../components/RestaurantCardInfo';
import { FavoritesContext } from '../../../../services/favorites/favoritesContext';
import { RestaurantContext } from '../../../../services/restaurant/mock/restaurantContext';

const RestaurantScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  const { loading, restaurants } = useContext(RestaurantContext);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <>
      <SafeArea>
        <Search
          isFavoritesToggled={isToggled}
          onFavoritesToggle={handleToggle}
        />
        {isToggled && (
          <FavoritesBar
            favorites={favorites}
            onNavigateToDetails={navigation.navigate}
          />
        )}
        {loading ? (
          <LoadingSpinner animating={true} color="#DB5A42" size="large" />
        ) : (
          <RestaurantListContainer
            data={restaurants}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', { restaurant: item })
                }
              >
                <RestaurantCardInfo restaurant={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </SafeArea>
    </>
  );
};

export default RestaurantScreen;
