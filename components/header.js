import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Color from '../constants/color';


const Header = (props) => {
    return (
       
        <View style={{...styles.header,... Platform.select({ios : styles.headerIos, android: styles.headerAndroid})}} >
            <Text style={{...styles.headerTitle,...props.style}}> {props.title} </Text>
        </View>
       
    );
}


const styles=StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIos: {
        backgroundColor: Color.accent,
        borderBottomColor: Color.primary,
        borderBottomWidth: 2
    },
    headerAndroid: {
        backgroundColor: Color.primary,
        
    },
    headerTitle: {

        fontSize: 18,
    }

});
export default Header;