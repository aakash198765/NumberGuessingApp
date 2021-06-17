import React, {useState} from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHander = textInput => {
        //it will replace the entered value with empty string if it is not a number - concept of regular expression and replace method
            setEnteredValue(textInput.replace(/[^0-9]/g, '')); 
    }
    

    // resetting the entered value
    const resetInputHandler = props => {
        setEnteredValue('');
    }

    return <TextInput {...props} style={{...styles.input, ...props.style}} onChangeText={numberInputHander} value={enteredValue} />
}

const styles=StyleSheet.create({
input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
}

});

export default Input;