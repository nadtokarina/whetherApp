import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, ScrollView, Platform} from 'react-native';
import propTypes from 'prop-types';

export default function Home({temp, condition, wind, humidity, pressure, city}) {
    return (
        <View style={styles.container}>
            <Text style={styles.location}>{city}</Text> 
            <Text style={styles.day}>Tue, Jun 30</Text>
            <View style={styles.degreesWrapper}>
                <Image style={styles.imgWeather} source={require('../assets/img/cludy.png')} />  
                <View>
                    <Text style={styles.degree}>{temp}°</Text>
                    <Text style={styles.weather}>{condition}</Text>
                </View>
            </View>
            <View style={styles.weatherList}>
                <TouchableOpacity style={styles.weatherItem}> 
                    <View style={styles.weatherItemWrapper}>
                        <Image style={styles.whetherItemImg} source={require('../assets/img/rain-icon.png')} />
                        <Text style={styles.weatherTitle}>Pressure</Text>
                    </View>
                    <Text style={styles.weatherMeasure}>{pressure}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.weatherItem}>
                    <View style={styles.weatherItemWrapper}>
                        <Image style={styles.whetherItemImg} source={require('../assets/img/wind-icon.png')} />
                        <Text style={styles.weatherTitle}>Wind</Text>
                    </View>
                    <Text style={styles.weatherMeasure}>{wind} m/s</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.weatherItem}>
                    <View style={styles.weatherItemWrapper}>
                        <Image style={styles.whetherItemImg} source={require('../assets/img/humidity-icon.png')} />
                        <Text style={styles.weatherTitle}>Humidity</Text>
                    </View>
                    <Text style={styles.weatherMeasure}>{humidity}%</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollDays} horizontal={true}>
                <View style={styles.dayTimeWrapper}>
                    <Text style={styles.dayTime}>Now</Text>
                    <Image style={styles.weatherTimeImg} source={require('../assets/img/weatherTime1.png')}/>
                    <Text style={styles.weatherNow}>19°</Text>
                </View>
                <View style={styles.dayTimeWrapper}>
                    <Text style={styles.dayTime}>13:00</Text>
                    <Image style={styles.weatherTimeImg} source={require('../assets/img/weatherTime1.png')}/>
                    <Text style={styles.weatherNow}>21°</Text>
                </View>
                <View style={styles.dayTimeWrapper}>
                    <Text style={styles.dayTime}>14:00</Text>
                    <Image style={styles.weatherTimeImg} source={require('../assets/img/weatherTime1.png')}/>
                    <Text style={styles.weatherNow}>20°</Text>
                </View>
                <View style={styles.dayTimeWrapper}>
                    <Text style={styles.dayTime}>15:00</Text>
                    <Image style={styles.weatherTimeImg} source={require('../assets/img/weatherTime1.png')}/>
                    <Text style={styles.weatherNow}>20°</Text>
                </View>
                <View style={styles.dayTimeWrapper}>
                    <Text style={styles.dayTime}>16:00</Text>
                    <Image style={styles.weatherTimeImg} source={require('../assets/img/weatherTime1.png')}/>
                    <Text style={styles.weatherNow}>20°</Text>
                </View>
                <View style={styles.dayTimeWrapper}>
                    <Text style={styles.dayTime}>17:00</Text>
                    <Image style={styles.weatherTimeImg} source={require('../assets/img/weatherTime1.png')}/>
                    <Text style={styles.weatherNow}>15°</Text>
                </View>
                <View style={styles.dayTimeWrapper}>
                    <Text style={styles.dayTime}>18:00</Text>
                    <Image style={styles.weatherTimeImg} source={require('../assets/img/weatherTime1.png')}/>
                    <Text style={styles.weatherNow}>13°</Text>
                </View>
            </ScrollView>
        </View>
    );
}


Home.propTypes = {
    temp: propTypes.number.isRequired,
    wind: propTypes.number.isRequired,
    humidity: propTypes.number.isRequired,
    pressure: propTypes.number.isRequired,
    city: propTypes.string.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"]).isRequired,
}


// Стили
const styles=StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        width: "100%",
        backgroundColor: "#E2A272",
        ...Platform.select({
            ios: {
                backgroundColor: "#E2A272",
            },
            android: {
                backgroundColor: "#E2A272",
            },
            default: {
                backgroundColor: '#E2A272',
            }
        })

    },
    location: {
        marginTop: 10,
        color: "#303345",
        fontSize: 25,
        fontWeight: '700',
        alignSelf: 'center',
    },
    day: {
        color: "#9A938C",
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'center',
    },
    degreesWrapper: {
        paddingTop: 40,
        flexDirection: 'row', 
    },
    imgWeather: {
        width: 200,
        height: 200,
    },
    degree: {
        fontSize: 60,
        fontWeight: 900,
        color: '#303345',
    },
    weather: {
        fontSize: 30,
        fontWeight: 200,
        color: '#303345',
    },
    weatherItem: {
        margin: 3,
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignSelf: 'center',
        padding: 7,
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 0 }, 
        shadowRadius: 2, 
        shadowOpacity: 0.2,
        ...Platform.select ({
            ios: {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: 15,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                borderWidth: '0.5',
            },
            android: {
                backgroundColor: '#FCDCC2',
                borderRadius: 5,
            },
            default: {
                backgroundColor: '#FCDCC2',
                borderRadius: 5,
            }
        })
    },
    weatherItemWrapper: {
        flexDirection: 'row',
    },
    whetherItemImg: {
        width: 55,
        height: 55,
        marginTop: 5
    },
    weatherTitle: {
        fontSize: 16,
        fontWeight: '300',
        color: '#303345',
        marginTop: 20,
    },
    weatherMeasure: {
        marginTop: 19,
        marginRight: 15,
        fontSize: 16,
        color: '#303345',
    },
    scrollDays: {
        margin: 10,
    },
    dayTimeWrapper: {
        margin: 5,
        marginTop: 10,
        ...Platform.select ({
            ios: {
                width: 100,
                height: 150,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: 20,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                borderWidth: '0.5',
                shadowColor: 'black', 
                shadowOffset: { width: 0, height: 0 }, 
                shadowRadius: 2, 
                shadowOpacity: 0.2,
            },
            android: {
                width: 100,
                height: 150,
                backgroundColor: 'rgba(255, 255, 255)',
            },
            default: {
                width: 170,
                height: 200,
                backgroundColor: '#FCDCC2',
                borderRadius: 5,
                shadowColor: 'black', 
                shadowOffset: { width: 0, height: 0 }, 
                shadowRadius: 2, 
                shadowOpacity: 0.2,
            }
        })
    },
    dayTime: {
        paddingTop: 15,
        color: '#303345',
        alignSelf: 'center',
        ...Platform.select ({
            ios: {
                fontSize: 16,
            },
            android: {
                fontSize: 16,
            },
            default: {
                fontSize: 24,
            }
        })
    },
    weatherTimeImg: {
        width: 70,
        height: 70,
        marginTop: 5,
        alignSelf: 'center',
    },
    weatherNow: {
        fontWeight: '600',
        color: '#303345',
        alignSelf: 'center',
        ...Platform.select ({
            ios: {
                fontSize: 20,
            },
            android: {
                fontSize: 20,
            },
            default: {
                fontSize: 30,
            }
        })
    }
})