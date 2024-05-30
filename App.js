import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './pages/Home'; // импортируем функцию из файла Home.js


export default function App() {
  return (
    <View style={styles.container}> // Контейнер, который оборачивает все приложение
      <Home /> // Используем функцию, импортируемую из файла Home.js 
    </View>
  );
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
