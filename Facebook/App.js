import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Xử lý đăng nhập ở đây (được gọi khi người dùng nhấn nút đăng nhập)
        // Ví dụ: kiểm tra tên người dùng và mật khẩu
        if (username === 'admin' && password === 'password') {
            alert('Đăng nhập thành công!');
            navigation.navigate('Home');
        } else {
            alert('Sai tên đăng nhập hoặc mật khẩu!');
        }
    };

    return ( <
        NavigationContainer >
        <
        Stack.Navigator >
        <
        Stack.Screen name = "Login"
        options = {
            { title: 'Đăng nhập' } } > {
            () => ( <
                View style = { styles.container } >
                <
                Text style = { styles.title } > Đăng nhập < /Text> <
                TextInput style = { styles.input }
                placeholder = "Tên đăng nhập"
                value = { username }
                onChangeText = { setUsername }
                /> <
                TextInput style = { styles.input }
                placeholder = "Mật khẩu"
                secureTextEntry value = { password }
                onChangeText = { setPassword }
                /> <
                TouchableOpacity style = { styles.button }
                onPress = { handleLogin } >
                <
                Text style = { styles.buttonText } > Đăng nhập < /Text> <
                /TouchableOpacity> <
                StatusBar style = "auto" / >
                <
                /View>
            )
        } <
        /Stack.Screen> <
        Stack.Screen name = "Home"
        component = { HomeScreen }
        options = {
            { title: 'Trang chủ' } }
        /> <
        /Stack.Navigator> <
        /NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});