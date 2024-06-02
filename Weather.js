import react from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native-web';

export default function Weather({temp}) {
    return (
        <View>
            <Text>{temp}</Text>
        </View>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired
}