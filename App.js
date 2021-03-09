import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { theme } from './src/infrastructure/theme';
import RestaurantScreen from './src/features/restaurant/screens/RestaurantScreen';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
