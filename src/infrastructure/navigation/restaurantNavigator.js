import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RestaurantScreen from '../../features/restaurant/screens/RestaurantScreen';

const RestaurantStack = createStackNavigator();

const RestaurantNavigator = () => {
  return (
    <>
      <RestaurantStack.Navigator headerMode="none">
        <RestaurantStack.Screen
          name="Restaurants"
          component={RestaurantScreen}
        />
      </RestaurantStack.Navigator>
    </>
  );
};

export default RestaurantNavigator;
