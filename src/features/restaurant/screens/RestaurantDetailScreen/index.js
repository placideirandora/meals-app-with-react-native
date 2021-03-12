import React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import { SafeArea } from '../../../../components/utils/SafeArea';
import RestaurantCardInfo from '../../components/RestaurantCardInfo';

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <>
      <SafeArea>
        <RestaurantCardInfo restaurant={restaurant} />
        <ScrollView>
          <List.Section title="Menu">
            <List.Accordion
              title="Breakfast"
              left={(props) => <List.Icon {...props} icon="bread-slice" />}
            >
              <List.Item title="Pizza" />
              <List.Item title="Burger" />
            </List.Accordion>

            <List.Accordion
              title="Lunch"
              left={(props) => <List.Icon {...props} icon="pizza" />}
            >
              <List.Item title="Rice" />
              <List.Item title="Chips" />
            </List.Accordion>

            <List.Accordion
              title="Dinner"
              left={(props) => <List.Icon {...props} icon="hamburger" />}
            >
              <List.Item title="Pork" />
              <List.Item title="Kebabs" />
            </List.Accordion>

            <List.Accordion
              title="Drinks"
              left={(props) => <List.Icon {...props} icon="beer" />}
            >
              <List.Item title="Hennesy" />
              <List.Item title="Tanqueray" />
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </SafeArea>
    </>
  );
};

export default RestaurantDetailScreen;
