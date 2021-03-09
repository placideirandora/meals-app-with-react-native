import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Title = styled.Text`
  margin-top: 10px;
  text-transform: uppercase;
`;

export const RestaurantCard = styled(Card)`
  padding: 20px;
  background: white;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: 0px;
`;
