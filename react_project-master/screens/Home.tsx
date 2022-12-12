import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import useGetUserList from "../hooks/useGetUserList";
import {ListRenderItem} from 'react-native';
import {Container, ItemContainer, ItemName, UsersList} from '../styles';
import ChatRoom from './ChatRoom';

export interface IUser {
  id: string;
  name: string;
}

const DATA = [
  {
    id: '1',
    name: 'Michael Scott',
  },
  {
    id: '2',
    name: 'Jim Halpert',
  },
  {
    id: '3',
    name: 'Pam Beesly',
  },
  {
    id: '4',
    name: 'Dwight Schrute',
  },
  {
    id: '5',
    name: 'Andy Bernard',
  },
  {
    id: '6',
    name: 'Ryan Howard',
  },
  {
    id: '7',
    name: 'Kelly Kapoor',
  },
  {
    id: '8',
    name: 'Toby Flenderson',
  },
  {
    id: '9',
    name: 'Stanley Hudson',
  },
  {
    id: '10',
    name: 'Phyllis Vance',
  },
];

const Item = ({data}: {data: IUser}) => (
  <ItemContainer>
    <ItemName>{data.name}</ItemName>
  </ItemContainer>
);


export default function Home({ navigation }: RootTabScreenProps<'Homepage'>) {
  const renderItem: ListRenderItem<IUser> = ({item}) => <Item data={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Utilisateurs</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Container style={styles.userListContainer}>
        <UsersList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item: IUser) => item.id}
        />
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  userListContainer: {
    width: '90%',
  },
});
