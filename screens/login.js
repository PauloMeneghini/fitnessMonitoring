import React from 'react';
import { Text, StyleSheet, TextInput, SafeAreaView, Pressable, Alert } from 'react-native';

export default function LoginScreen() {

    const alertLogin = () => Alert.alert('TESTE');

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Bem vindo de volta!</Text>

          <TextInput style={styles.inputs} placeholder="Email" placeholderTextColor='#bbb'/>
          <TextInput style={styles.inputs} placeholder="Senha" placeholderTextColor='#bbb' />

          <Pressable style={styles.button} onPress={alertLogin}>
            <Text style={styles.textButton}>Logar</Text>
          </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 36,
        marginBottom: 25,
        fontWeight: 'bold',
        color: '#3083DC',
        marginBottom: 50
    },
    inputs: {
        height: 60,
        width: 300,
        marginBottom: 30,
        borderBottomWidth: 2,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 22,
        color: '#bbb',
    },
    button: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#3083DC',
        marginTop: 20
    },
    textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#FDFDFD'
    }
});