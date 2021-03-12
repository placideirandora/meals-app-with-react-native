import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import RestaurantScreen from '../../features/restaurant/screens/RestaurantScreen';
import RestaurantDetailScreen from '../../features/restaurant/screens/RestaurantDetailScreen';

const RestaurantStack = createStackNavigator();

const RestaurantNavigator = () => {
  return (
    <>
      <RestaurantStack.Navigator
        headerMode="none"
        screenOptions={{
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <RestaurantStack.Screen
          name="Restaurants"
          component={RestaurantScreen}
        />
        <RestaurantStack.Screen
          name="RestaurantDetail"
          component={RestaurantDetailScreen}
        />
      </RestaurantStack.Navigator>
    </>
  );
};

export default RestaurantNavigator;
