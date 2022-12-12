import { Pressable, StyleSheet, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Nom d'utilisateur"></TextInput>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Mot de Passe"></TextInput>
      </View>
      <Pressable style={styles.button}><Text style={styles.btnContent}>Se connecter</Text></Pressable>
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
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    marginBottom: 20,
  },
  button: {
    width: '90%',
    backgroundColor: '#0C0C0C',
    padding: 15,
    borderRadius: 6,
  },
  btnContent: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
