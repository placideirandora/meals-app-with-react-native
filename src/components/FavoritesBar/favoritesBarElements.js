import styled from 'styled-components/native';

export const FavoritesContainer = styled.View`
  padding: 10px;
`;

export const CompactContainer = styled.TouchableOpacity`
  margin-left: 8px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  margin-left: 8px;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
