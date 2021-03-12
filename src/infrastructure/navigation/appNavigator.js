import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

import RestaurantScreen from '../../features/restaurant/screens/RestaurantScreen';
import { SafeArea } from '../../components/utils/SafeArea';

const content = { justifyContent: 'center', alignItems: 'center' };

const MapScreen = () => {
  return (
    <SafeArea style={content}>
      <Text>Maps!</Text>
    </SafeArea>
  );
};

const SettingsScreen = () => {
  return (
    <SafeArea style={content}>
      <Text>Settings!</Text>
    </SafeArea>
  );
};

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === 'Restaurants') {
      iconName = 'fast-food';
    }

    if (route.name === 'Maps') {
      iconName = 'map';
    }

    if (route.name === 'Settings') {
      iconName = 'settings';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const tabBarOptions = {
  activeTintColor: '#DB5A42',
  inactiveTintColor: 'gray',
};

const AppNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBarOptions={tabBarOptions}
        >
          <Tab.Screen name="Restaurants" component={RestaurantScreen} />
          <Tab.Screen name="Maps" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
