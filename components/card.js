import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Keyboard, TouchableOpacity, Dimensions  } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Color from '../constants/color';

//import TextWrapper component from fontComponent --> global component/wrapper compnent to style
import TextWrapperComponent from '../constants/fontComponent';

const Card = props => { 
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    //orientation changes --> portrait and lanscape mode
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width /3.5); // default value with which we'll start
    const [buttonMarginLeft, setButtonMargin] = useState(Dimensions.get('window').width/20 );
    //function to change/assign new buttonWidth parameter
   // const updateLayout = () => {
   //     setButtonWidth(Dimensions.get('window').width /3.5);   
   // }
    //addEventListener will recalculate the changes parameters and will trigger the updateLayout 
    //function to update the buttonWidth
    //Dimensions.addEventListener('change', updateLayout);

    // In previous technique we're adding a new event listener, instead we can useEffect 
    // where we can remove the previous event listener, and can add a new event listener
    // so that only one event listener will be running
    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width /4);
            setButtonMargin(Dimensions.get('window').width/20 ) ;
        };
        Dimensions.addEventListener('change', updateLayout);


        return () => { 
            Dimensions.removeEventListener('change', updateLayout); 
        }
    }
    );



    const numberInputHander = textInput => {
        //it will replace the entered value with empty string if it is not a number - concept of regular expression and replace method
            setEnteredValue(textInput.replace(/[^0-9]/g, '')); 
    } 

    // resetting the entered value
    const resetInputHandler = props => {
       setEnteredValue('');
       setConfirmed(false);
    }
    //confirm the input handler to start the game 
    const confirmInputHandler =() =>{ 
        //before starting the game just check whether the enterdValue is a valid
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber>99){ 
            //Alert is native API, alert has (title, body, alert-object-> to style alert, and alert has pre-defined style )
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }] );
            return;
        }

        //setconfirmed -> true -> to start the game
        setConfirmed(true); 
        //save the value with which we'll start the game 
        setSelectedNumber(parseInt(enteredValue));
        //after confirming, we need to reset the entered value 
        setEnteredValue('');
        //after confirming, the keyboard should be dismissed automatically
        Keyboard.dismiss();
    }

     // display/work the selected number
    let confirmedOutput;
    if(confirmed) {
        confirmedOutput = <Text> Chosen Number: {selectedNumber} </Text>

    } 

    return (
<View style={{alignItems: 'center'}}>
    <View style={{...styles.card, ...props.style}}>
        <TextWrapperComponent>Select a Number</TextWrapperComponent>

        <TextInput style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2} 
            onChangeText={numberInputHander} value={enteredValue} />

        <View style={styles.buttonContainer}>
            <View style={{ width: buttonWidth, marginLeft: buttonMarginLeft}} >
                <Button title="Reset" onPress={resetInputHandler} color={Color.accent} />
            </View>
            <View style={{marginLeft: Dimensions.get('window').width>600 ? 100: buttonMarginLeft, width: buttonWidth}} >
                <Button title="Confirm" onPress={confirmInputHandler} color={Color.primary} />
            </View>
        </View>
    </View>
    
    <View style={{...styles.card, ...props.style, elevation: 4, marginTop: 30, width: Dimensions.get('window').width/2,alignItems: 'center',}} >
        <Text style={{fontSize: 15, fontWeight: 'bold', }}> You selected</Text>
        <View style={styles.selected}>
            <Text style={styles.number }>{selectedNumber}</Text>
        </View>
        <View style={{marginVertical: 8}}>
            <View> 
                 <TouchableOpacity style={styles.buttonP} onPress={() => props.onStartGame(selectedNumber)} >
                     <Text style={styles.countContainer}>START GAME</Text>
                 </TouchableOpacity>      
            </View>         
    </View>
 </View>
</View>

    );
}


const styles = StyleSheet.create({ 
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
       justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    card: { 
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        elevation: 6 ,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10, 
    },
    button: {
      // width: 120,
      //marginLeft: Dimensions.get('window').width/30 ,
      
      
    },
    input: {
        width: '50%',
        textAlign: 'center',
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginLeft: Dimensions.get('window').width < 400 ? 50 : 0,
    },
    selected: {
    
        borderWidth: 2,
        borderColor: '#9932cc',
        padding: 30,
        borderRadius: 10,
        alignItems: 'center',
        height: 10,
        justifyContent: 'center',
        marginVertical: 20



    },
    number: {
        color: Colors.accent,
        fontSize: 14,
       

    },
    buttonP: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#c717fc",
        padding: 25,
        borderRadius: 50,
        width: '100%',
        height: 50,
        marginBottom: 5
        
      },
      countContainer: {
       fontWeight: 'bold'
      }

}); 
//shadow property works only one on the ios devices
// to define shadow for android, use elevation property


export default Card;