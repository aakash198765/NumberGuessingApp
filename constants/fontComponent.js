import React from 'react';
import {  Text, StyleSheet, Dimensions } from 'react-native';

const TextWrapperComponent = props => {
    return (
            <Text style={styles.textDesing}>{props.children}</Text>
    );
}
const styles = StyleSheet.create({

    textDesing: {
        fontFamily: 'open-sans-bold',
        marginLeft: Dimensions.get('window').width < 400? 50: 0,
    }
});

export default TextWrapperComponent;