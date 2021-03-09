import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Sundowner',
    icon,
    photos = ['https://picsum.photos/400'],
    address = '50 KG 23 St',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <>
      <Card elevation={5} style={styles.card}>
        <Card.Cover source={{ uri: photos[0] }} />
        <Text style={styles.text}>{name}</Text>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: { padding: 20 },
  text: { marginTop: 10, textTransform: 'uppercase' },
});

export default RestaurantInfo;
