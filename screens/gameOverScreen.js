import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

//importing global color styles
import Color from '../constants/color';
//import global/DefaultStyles from constants/default-style
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
    //Destructuring of object
    const {totalRounds, userNumber1 } = props;

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.bodyText}> The Game is Over!</Text>
        
            <Image 
                style={styles.imageStyle}
                source={require('../assets/win.jpg')}
            />

            <Text style={styles.rounds}> Number of rounds</Text>
            <Text style={styles.num}> { totalRounds }</Text>
            <Text style={styles.rounds}> Correct Number</Text>
            <Text style={styles.num}>{ userNumber1 }</Text>
            <View style={DefaultStyles.gameOverScreenButton}>
                <TouchableOpacity style={styles.buttonP} onPress={props.restart} >
                    <Text style={styles.countContainer}>START GAME</Text>
                </TouchableOpacity>      
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageStyle: {
        width: '70%',
        height: '40%',
        
    },
    rounds: {
        fontSize: 18,
        marginVertical: 5
    },
    num: {
        color: Color.primary,
        fontWeight: 'bold'
    },
    buttonP: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: Color.accent,
        padding: 20,
        borderRadius: 50,
        width: '100%',
        height: 50
        
      },
      countContainer: {
       fontWeight: 'bold'
      }
    

});

export default GameOverScreen;