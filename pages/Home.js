import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, ScrollView} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}> //контейнер, в который заключено поле ввода для поиска города, в котором нужно посмотреть прогноз погоды
            <View style={styles.inputWrapper}> //контейнер, чтобы расположить элементы горизонтально
                <TextInput style={styles.textInput} placeholder='Найти город...' /> // поле ввода
                <View style={styles.buttonWrapper}><Button title='Найти' color={'#fff'} /></View> // Кнопка для начала поиска нужного города
            </View>
            <Text style={styles.location}>Moscow, Russia</Text> // Текстовый элемент, Название города в котором просматриваетс прогноз
            <Text style={styles.day}>Tue, Jun 30</Text> // Дата
            <View style={styles.degreesWrapper}> // Контейнер в котором распологаются данные о тпмпературе воздуха, нужен чтобы расположить элементы на экране так, как требуется
                <Image style={styles.imgWeather} source={require('../assets/img/cludy.png')} />  // Изображение, отражающее погоду
                <View>
                    <Text style={styles.degree}>19°C</Text>
                    <Text style={styles.weather}>Rainy</Text>
                </View>
            </View>
            <View style={styles.weatherList}> // Контейнер, который содержит подробные данные о погоде: сила ветра, наличие дождя и влажность
                <TouchableOpacity style={styles.weatherItem}> //Элемент, реагирующий на нажатие, видимость всех элементов, заключенных внутрб этого элемента уменьшается при нажатии
                    <View style={styles.weatherItemWrapper}>
                        <Image style={styles.whetherItemImg} source={require('../assets/img/rain-icon.png')} />
                        <Text style={styles.weatherTitle}>RainFall</Text>
                    </View>
                    <Text style={styles.weatherMeasure}>3cm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.weatherItem}>
                    <View style={styles.weatherItemWrapper}>
                        <Image style={styles.whetherItemImg} source={require('../assets/img/wind-icon.png')} />
                        <Text style={styles.weatherTitle}>Wind</Text>
                    </View>
                    <Text style={styles.weatherMeasure}>19km/h</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.weatherItem}>
                    <View style={styles.weatherItemWrapper}>
                        <Image style={styles.whetherItemImg} source={require('../assets/img/humidity-icon.png')} />
                        <Text style={styles.weatherTitle}>Humidity</Text>
                    </View>
                    <Text style={styles.weatherMeasure}>64%</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollDays} horizontal={true}> //Список данных с возможностью горизонтальной прокрутки. Отображает данные о прогнозе погоды на последующие часы
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


// Стили
const styles=StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        width: "100%",
        backgroundColor: "#E2A272",
    },
    location: {
        marginTop: 20,
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
        backgroundColor: 'rgba(255, 255, 255, 0.36)',
        padding: 7,
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: '0.5',
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 0 }, 
        shadowRadius: 2, 
        shadowOpacity: 0.2,
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
    inputWrapper: {
        flexDirection: 'row',
    },
    textInput: {
        margin: 10,
        padding: 3,
        marginTop: -10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '75%',
        height: 25,
        borderRadius: 3,
    },
    buttonWrapper: {
        backgroundColor: 'rgba(48, 51, 69, 0.5)',
        borderRadius: 3,
        height: 25,
        marginTop: -10,
        marginLeft: -5,
    },
    scrollDays: {
        margin: 10,
    },
    dayTimeWrapper: {
        margin: 5,
        marginTop: 10,
        width: 100,
        height: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.36)',
        borderRadius: 20,
    },
    dayTime: {
        paddingTop: 15,
        fontSize: 16,
        color: '#303345',
        alignSelf: 'center',
    },
    weatherTimeImg: {
        width: 70,
        height: 70,
        marginTop: 5,
        alignSelf: 'center',
    },
    weatherNow: {
        fontSize: 20,
        fontWeight: '600',
        color: '#303345',
        alignSelf: 'center',
    }
})