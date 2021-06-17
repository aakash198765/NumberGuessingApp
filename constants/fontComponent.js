import React from 'react';
import {  Text, StyleSheet } from 'react-native';

const TextWrapperComponent = props => {
    return (
            <Text style={styles.textDesing}>{props.children}</Text>
    );
}
const styles = StyleSheet.create({

    textDesing: {
        fontFamily: 'open-sans-bold',
    }
});

export default TextWrapperComponent;