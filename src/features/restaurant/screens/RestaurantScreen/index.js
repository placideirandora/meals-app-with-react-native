import React, { useContext } from 'react';
import { Pressable } from 'react-native';

import RestaurantCardInfo from '../../components/RestaurantCardInfo';
import {
  RestaurantListContainer,
  LoadingSpinner,
} from './restaurantScreenElements';
import { SafeArea } from '../../../../components/utils/SafeArea';
import { RestaurantContext } from '../../../../services/restaurant/mock/restaurantContext';
import Search from '../../components/Search';

const RestaurantScreen = ({ navigation }) => {
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
            renderItem={({ item }) => (
              <Pressable
                onPress={() => navigation.navigate('RestaurantDetail')}
              >
                <RestaurantCardInfo restaurant={item} />
              </Pressable>
            )}
          />
        )}
      </SafeArea>
    </>
  );
};

export default RestaurantScreen;
