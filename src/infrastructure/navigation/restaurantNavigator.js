import React from 'react';
import { Text, View } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import RestaurantScreen from '../../features/restaurant/screens/RestaurantScreen';

const RestaurantStack = createStackNavigator();

const content = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#DB5A42',
};

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
          component={() => (
            <View style={content}>
              <Text>Restaurant Detail</Text>
            </View>
          )}
        />
      </RestaurantStack.Navigator>
    </>
  );
};

export default RestaurantNavigator;
