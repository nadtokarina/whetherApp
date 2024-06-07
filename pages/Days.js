// На этой странице будет отображен список "избранных " городов, городов, погоду в которых можно посмотреть в быстром доступе
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';



export default function Days() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.textInput} placeholder='Search for the city or the airport...' />
            </View>
            <View style={styles.cityWrapper}>
                <TouchableOpacity style={styles.cities}>
                    <View style={styles.citiNameWrapper}>
                        <Image source={require('../assets/img/rain-icon.png')} style={styles.imgCity}  />
                        <Text style={styles.cityName}>Сургут</Text>
                    </View>
                    <Text style={styles.cityWeather}>+13</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cities}>
                    <View style={styles.citiNameWrapper}>
                        <Image source={require('../assets/img/rain-icon.png')} style={styles.imgCity}  />
                        <Text style={styles.cityName}>Санкт-Петербург</Text>
                    </View>
                    <Text style={styles.cityWeather}>+21</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cities}>
                    <View style={styles.citiNameWrapper}>
                        <Image source={require('../assets/img/wind-icon.png')} style={styles.imgCity} />
                        <Text style={styles.cityName}>Адлер</Text>
                    </View>
                    <Text style={styles.cityWeather}>+29</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Стили 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        width: "100%",
        backgroundColor: "#E2A272",
    },
    title: {
        marginTop: -70,
        marginLeft: 10,
        alignSelf: 'right',
        color: "#303345",
        fontSize: 25,
        fontWeight: '700',
    },
    inputWrapper: {
        flexDirection: 'row',
    },
    textInput: {
        margin: 10,
        padding: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        width: '95%',
        alignSelf: 'center',
        height: 30,
        borderRadius: 7,
    },
    cityWrapper: {
        // flexDirection: 'row',
    },
    cities: {
        margin: 5,
        width: '85%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 7,
        borderRadius: 15,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: '0.5',
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 0 }, 
        shadowRadius: 2, 
        shadowOpacity: 0.2,
    },
    cityName: {
        paddingTop: 17,
        fontSize: 16,
        fontWeight: '300',
        color: '#303345',
    },
    cityWeather: {
        paddingTop: 17,
        paddingRight: 15,
        fontSize: 16,
        fontWeight: '500',
        color: '#303345',
    },
    citiNameWrapper: {
        flexDirection: 'row'
    },
    imgCity: {
        marginTop: 5,
    }
})