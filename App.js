import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import RestaurantScreen from './src/features/restaurant/screens/RestaurantScreen';

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
