import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, ColorPropType } from 'react-native';
import DefaultStyles from '../constants/default-styles';

//importing global color styles
import Color from '../constants/color';

const TouchableButton3 = props => { 
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>

}

const styles = StyleSheet.create({


});