import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ItemContainer = styled.View`
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 15px;
  margin-vertical: 8px;
`;

export const ItemName = styled.Text`
  font-size: 16px;
`;

export const UsersList = styled.FlatList`
  padding: 20px;
`;