import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Title = styled.Text`
  margin-top: ${(props) => props.theme.space[2]};
  text-transform: ${(props) => props.theme.transform[1]};
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  background: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[0]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
  text-transform: ${(props) => props.theme.transform[1]};
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RestaurantTypeImage = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export const RightIconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
