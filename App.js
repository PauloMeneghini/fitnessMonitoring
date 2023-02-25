import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';

function HomeScreen( { navigation } ) {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />

      <Pressable style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.textButton}>Cadastrar-se</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3083DC',
    width: 200,
    marginBottom: 20
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
