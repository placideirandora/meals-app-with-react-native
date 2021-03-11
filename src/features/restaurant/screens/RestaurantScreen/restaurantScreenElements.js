import { FlatList, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const RestaurantListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const LoadingSpinner = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
