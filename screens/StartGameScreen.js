//keeping the screens in the separate folder - screens, you can also create the in the components

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
//we're using touchablewithoutfeedback to wrap the whole content on ios, android
//We're importing Keyboard which is not a component, rather it's a NATIVE API, and using keyboard.dismiss() we can dismiss the keyboard from
// screen
//import Card from component/card
import Card from '../components/card'; 

//import GlobalStyles from globaltylefile from constants folder
import  DefaultStyles from '../constants/default-styles';

//importing global color styles
import Color from '../constants/color';

const StartGameScreen = props => {

    return ( 
        //close keyboard when you type somewhere on the screen
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
         <View style={styles.screen}> 

             <Text style={ {...DefaultStyles.bodyText, marginVertical:20 }}> Start a New Game!</Text>  
              <Card style={styles.inputContainer} onStartGame={props.onStartGame} />

         </View>
         </TouchableWithoutFeedback>

    );
}


const styles = StyleSheet.create({
screen:{
    flex: 1,
    padding: 30,
    alignItems: 'center',
},
title: {
    fontSize: 20,
    marginVertical: 10,
},
inputContainer: {
    maxWidth: '80%',
    width: 300,
    alignItems: 'center',
}

});

export default StartGameScreen;

