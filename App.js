import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, StatusBar, View } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: 'coral', padding: 16 }}>
          <Text style={{ color: 'white' }}>Search Text Field</Text>
        </View>
        <View style={{ backgroundColor: 'blue', padding: 16, flex: 1 }}>
          <Text style={{ color: 'white' }}>Restaurant List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
