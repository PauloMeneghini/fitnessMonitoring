//import { text } from 'express';
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Pressable } from 'react-native';

export default function RegisterScreen() {

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputConfirmPassword, setInputConfirmPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Faça seu cadastro</Text>

            <TextInput placeholder='Nome' style={styles.inputs} value={inputName} onChangeText={ (text) => setInputName(text) }></TextInput>
            <TextInput placeholder='Email' style={styles.inputs} value={inputEmail} onChangeText={ (text) => setInputEmail(text) }></TextInput>
            <TextInput placeholder='Senha' style={styles.inputs} value={inputPassword} onChangeText={ (text) => setInputPassword(text) }></TextInput>
            <TextInput placeholder='Confirmar senha' style={styles.inputs} value={inputConfirmPassword} onChangeText={ (text) => setInputConfirmPassword(text) }></TextInput>

            <Pressable style={styles.button}>
                <Text style={styles.textButton}>Cadastrar</Text>
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
})