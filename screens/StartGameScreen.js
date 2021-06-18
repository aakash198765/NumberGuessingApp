//keeping the screens in the separate folder - screens, you can also create the in the components

import React from 'react';
import { StyleSheet, Text, View,  TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native'; //TouchableWithoutFeedback, KeyboardAvoidingView - important
//we're using touchablewithoutfeedback to wrap the whole content on ios, android
//We're importing Keyboard which is not a component, rather it's a NATIVE API, and using keyboard.dismiss() we can dismiss the keyboard from
// screen
//import Card from component/card
import Card from '../components/card'; 

//import GlobalStyles from globaltylefile from constants folder
import  DefaultStyles from '../constants/default-styles';


const StartGameScreen = props => {

    return ( 
       
    <ScrollView> 
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}> 
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>  
                 <View style={styles.screen}> 
                     <Text style={ {...DefaultStyles.bodyText, marginVertical:20 }}> Start a New Game!</Text>  
                    <Card style={styles.inputContainer} onStartGame={props.onStartGame} />
                 </View>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>

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
    minWidth: 300,
    width: '80%',
    maxWidth: '95%',
    alignItems: 'center',
}

});

export default StartGameScreen;

