import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import * as Location from 'expo-location';
import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import Home from './pages/Home'; // импортируем функцию из файла Home.js

const API_KEY = 'f1d721cb8bcedd10301d488f79db8149';


export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data: {main: {temp, humidity, pressure}, weather, wind, name}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false, 
      temp: temp, 
      condition: weather[0].main,
      wind: wind.speed,
      humidity: humidity,
      pressure: pressure,
      city: name});
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      //Сделать запрс к API
    } catch (error) {
      Alert.alert('Не получается определить местоположение');
    }

  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    const {isLoading, temp, condition, wind, humidity, pressure, city} = this.state
    return (
      isLoading ? null : 
      <View style={styles.container}> 
        <Home temp={Math.round(temp)} condition={condition} wind={Math.round(wind)} humidity={humidity} pressure={pressure} city={city}/> 
      </View> 
    );
  }
}

// Стили
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
