import React from 'react';
import { StyleSheet, Text, View, Alert, Platform, LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Days from './pages/Days';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import GetWeather from './pages/getWeather';
import { BlurView } from 'expo-blur';

LogBox.ignoreLogs([
  'Warning: Failed prop type: The prop `humidity` is marked as required in `Home`, but its value is `undefined`.',
  'Warning: Failed prop type: The prop `pressure` is marked as required in `Home`, but its value is `undefined`.',
  'Warning: Failed prop type: The prop `city` is marked as required in `Home`, but its value is `undefined`.',
  'Warning: Failed prop type: The prop `condition` is marked as required in `Home`, but its value is `undefined`.',

  /GraphQL error: .*/,
])


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#E2A272' ,
      tabBarBackground: () => <BlurView  intensity={95}
      style={{
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
      }}
      />
    }}
    >
      <Tab.Screen name='Home' component={GetWeather} options={{title:'Home', 
      tabBarIcon: ({color}) => <FontAwesome name='home' size={24} color={color} /> }}>
      </Tab.Screen>
      <Tab.Screen name='Days' component={Days} options={{title:'Cities', 
      tabBarIcon: ({color}) => <FontAwesome name='heart' size={20} color={color} /> }}>
      </Tab.Screen>
    </Tab.Navigator>
  )
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={GetWeather} />
      <Stack.Screen name="Days" component={Days} />
    </Stack.Navigator>
  );
}


export default function App() {
  return(
    <NavigationContainer>
      <MyTab />
      {/* <Tab.Navigator 
      screenOptions={{headerShown: false}}>
      <Tab.Screen name='Home' component={GetWeather} options={{title:'Home', 
      tabBarIcon:({size, icon}) => (
      <Ionicons name="ios-home-outline" size={24} color="#121111" />
      )}}>
        </Tab.Screen>
        <Tab.Screen name='Days' component={Days} />
      </Tab.Navigator> */}
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
