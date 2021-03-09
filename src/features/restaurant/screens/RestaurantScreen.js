import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/RestaurantInfo';

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search Restaurant..."
            onChangeText={handleChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.list}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'ghostwhite',
  },
  search: {
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

export default RestaurantScreen;
