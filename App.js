import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import { theme } from './src/infrastructure/theme';
import RestaurantScreen from './src/features/restaurant/screens/RestaurantScreen';
import { SafeArea } from './src/components/utils/SafeArea';
import { RestaurantsContextProvider } from './src/services/restaurant/mock/restaurantContext';

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

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
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
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
