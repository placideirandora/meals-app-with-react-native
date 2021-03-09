import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Title = styled.Text`
  margin-top: ${(props) => props.theme.space[2]};
  text-transform: ${(props) => props.theme.transform[1]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  background: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[0]};
`;
