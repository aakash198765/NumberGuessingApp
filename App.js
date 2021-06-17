import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';



//to import the custom fonts
import * as Font from 'expo-font';
//import AppLoading to load the components
import AppLoading  from 'expo-app-loading';

//import TextWrapperComponent from fontComponent --> acts as Wrapper Compnent for font style
import TextWrapperComponent from './constants/fontComponent';

//import global/DefaultStyles from constants/default-style
import DefaultStyles from './constants/default-styles';

//import the header component
import Header from './components/header';
//import the StartGameScreen component from screens/StartGameScreen
import StartGameScreen from './screens/StartGameScreen';
//import the GameScreen
import GameScreen from './screens/gameScreen';
//import Game over screen
import GameOverScreen from './screens/gameOverScreen';

//we're planning to switch the screen components conditionall
//we don't want to show both the screen at same time,
//So we'll use useState(display/notDisplay) and show which screen to show condtionally 


// create a fetchFonts function to load the fonts in the using  loadSync()
const fetchFonts =()=>{
  Font.loadAsync({
    'open-sans-regular' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};


export default function App() { 
  //it will receive value when the user wil give value in the input field and startGameHandler function will be triggered
  const [userNumber, setUserNumber] = useState();
  //to store number of rounds
  const [guessRounds, setGuessRounds] = useState(0);

   //maintaing state loading -> to indicate the app has been loaded or not-> fonts loaded?
   const [dataLoaded, setDataLoaded] = useState(false); //intially it will take not loaded
   //AppLoading function // making sure that the font has been loaded
  if(!dataLoaded) {
     return (<AppLoading 
                startAsync={fetchFonts} 
                onFinish={()=>setDataLoaded(true)} 
                onError={(err)=>console.log(err)} 
            />
          );
   }



  // to start new game from Gameover scree
  const configureNewGameHandler = () => {
      setGuessRounds(0);
      setUserNumber(null);
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  //selectedNumber is the reference/value which startGameHandler will receive when anyone insert value and start the game
  const startGameHanler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  } 

  //start with screen rendering condition, initially it will display <StartGameScreen /> 
  let content = <StartGameScreen onStartGame={startGameHanler} />;
  //onselecting number, display/screen will differ
  if(userNumber && guessRounds <=0) {
    content = <GameScreen userChoice={userNumber}  endGame={startGameHanler}  onGameOver={gameOverHandler} /> ;
  } else if(guessRounds > 0) {
    content = <GameOverScreen totalRounds={guessRounds} userNumber1={userNumber} restart={configureNewGameHandler} /> ;
  }

  

  //Initally it will show <StartGameScreen />, but when you click "START GAME" button, it will set userNumber to "true" and 
  //then "<GameScreen />" will be render, 
  return (
    <View style={styles.screen}>
     <Header title="Guess a Number" style={DefaultStyles.head} />
    {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
  flex: 1
  
  },
});


