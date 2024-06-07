import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Loading() {
    return (
        <View style={styles.container}>
            <FontAwesome name='spinner' size={100} style={styles.icon} />
            <Text style={styles.textLoading}>Пожалуйста, подождите. Мы получаем данные...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        width: "100%",
        backgroundColor: "#E2A272",
    },
    textLoading: {
        fontSize: 24,
        color: '#333333',
        width: '75%',
        marginTop: 300,
        marginLeft: 20
    },
    icon: {
        color: '#333333',
        alignSelf: 'center',
        marginTop: 200,
    }
})