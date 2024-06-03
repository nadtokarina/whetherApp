import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Days from './pages/Days';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetWeather from './pages/getWeather';


// const API_KEY = 'f1d721cb8bcedd10301d488f79db8149';
const Tab = createBottomTabNavigator();


// export default class extends React.Component {

//   state = {
//     isLoading: true
//   }

//   getWeather = async (latitude, longitude) => {
//     const {data: {main: {temp, humidity, pressure}, weather, wind, name}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
//     this.setState({
//       temp: temp, 
//       condition: weather[0].main,
//       wind: wind.speed,
//       humidity: humidity,
//       pressure: pressure,
//       city: name});
//     console.log(data);
//   }

//   getLocation = async () => {
//     try {
//       await Location.requestForegroundPermissionsAsync();
//       const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
//       this.getWeather(latitude, longitude);
//     } catch (error) {
//       Alert.alert('Не получается определить местоположение');
//     }

//   }

//   componentDidMount() {
//     this.getLocation();
//   }

//   render () {
//     const {isLoading, temp, condition, wind, humidity, pressure, city} = this.state
//     return (
//         <View style={styles.container}>
//           <Home temp={Math.round(temp)} condition={condition} wind={Math.round(wind)} humidity={humidity} pressure={pressure} city={city}/>
//         </View>
//     );
//   }
// }

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={GetWeather} />
        <Tab.Screen name='Days' component={Days} />
      </Tab.Navigator>
  </NavigationContainer>
  )
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
