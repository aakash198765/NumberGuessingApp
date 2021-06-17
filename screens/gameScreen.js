import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Keyboard, Alert, ColorPropType } from 'react-native';
import DefaultStyles from '../constants/default-styles';

//importing global color styles
import Color from '../constants/color';

//import inbuilt expo/react-native icons
import { Ionicons } from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
    min =Math.ceil(min);
    max=Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else{
        return rndNum;
    }
};


const GameScreen = props => { 
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    
    //to keep count of rounds
    const [rounds, setRounds] = useState(0);
    

    const currentLoW = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onGameOver} = props;

    //win condition using useEffect
    useEffect(()=>{
    if(currentGuess === props.userChoice){  
        onGameOver(rounds);

    }
   }
    , [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if( (direction === 'lower' && currentGuess<props.userChoice) || (direction === 'higher' && currentGuess>props.userChoice) )
        {
            Alert.alert('Don\'t lie', 'You know that this is wrong...', 
                            [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        } else {
            currentLoW.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLoW.current, currentHigh.current, currentGuess );
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds+1);
        
    }; 


    return ( 
        <View style={styles.screen}>
            <Text style={{fontWeight: 'bold', marginVertical: 20, fontSize: 16}}>Computer's Guess</Text>
            <Text style={{fontWeight: 'bold', color: Color.primary, marginVertical: 10}}>{currentGuess}</Text>
            <View style={styles.buttonContainer}>
                 <View>
                    <TouchableOpacity style={styles.button} onPress={nextGuessHandler.bind(this, "lower")} >
                        <Text><Ionicons name="md-remove" size={24} color="Color.primary" /></Text>
                    </TouchableOpacity>
                 </View>
                <View> 
                     <TouchableOpacity style={styles.button} onPress={nextGuessHandler.bind(this, "higher")} >
                         <Text style={styles.countContainer}><Ionicons name="md-add" size={24} color="Color.primary" /></Text>
                    </TouchableOpacity>      
                 </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({ 
    screen: {
        flex:1,
        padding: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#c717fc",
        padding: 10,
        borderRadius: 50,
        width: 100,
        height: 50
        
      },
      countContainer: {
       fontWeight: 'bold'
      }

});

export default GameScreen;