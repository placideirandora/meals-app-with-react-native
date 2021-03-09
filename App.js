import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, StatusBar, View } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text style={styles.text}>Search Text Field</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>Restaurant List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: 'coral',
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  },
  text: {
    color: 'white',
  },
});
