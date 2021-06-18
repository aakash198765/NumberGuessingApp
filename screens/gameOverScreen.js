import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Dimensions, ScrollView, SafeAreaView } from 'react-native';

//importing global color styles
import Color from '../constants/color';
//import global/DefaultStyles from constants/default-style
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
    //Destructuring of object
    const {totalRounds, userNumber1 } = props;

    return ( 
        //it's important to wrap the all view component inside <SafeAreaView>
        //SafeAreaView will add padding to the screen, and it might create issue in lanscape mode
    <SafeAreaView>
        <ScrollView>
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
        </ScrollView>
    </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageStyle: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.3,
        
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
        borderRadius: Dimensions.get('window').height>600? 50 : 10,
        width: '100%',
        height: 50,
        marginVertical: 10
        
      },
      countContainer: {
       fontWeight: 'bold'
      }
    

});

export default GameOverScreen;