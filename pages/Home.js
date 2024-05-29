import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.location}>Moscow, Russia</Text>
            <Text style={styles.day}>Tue, Jun 30</Text>
            <View style={styles.degreesWrapper}>
                <Image style={styles.imgWeather} source={require('../assets/img/cludy.png')} />
                <View>
                    <Text style={styles.degree}>19°C</Text>
                    <Text style={styles.weather}>Rainy</Text>
                </View>
            </View>
            <View style={styles.weatherList}>
                <TouchableOpacity style={styles.weatherItem}>
                    <Text style={styles.weatherTitle}>RainFall</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        width: "100%",
        backgroundColor: "#E2A272",
    },
    location: {
        color: "#303345",
        fontSize: 20,
        fontWeight: 900,
    },
    day: {
        color: "#9A938C",
        fontSize: 16,
    },
    degreesWrapper: {
        paddingTop: 60,
        flexDirection: 'row', 
    },
    imgWeather: {
        width: 200,
        height: 200,
    },
    degree: {
        fontSize: 60,
        fontWeight: 900,
    },
    weather: {
        fontSize: 30,
        fontWeight: 200,
    },
})