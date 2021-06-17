import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';

import Color from '../constants/color';


const Header = (props) => {
    return (
        <View style={styles.header} >
            <Text style={{...styles.headerTitle,...props.style}}> {props.title} </Text>
        </View>
    );
}


const styles=StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    }

});
export default Header;