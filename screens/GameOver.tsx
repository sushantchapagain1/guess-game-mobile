import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Title from '../components/Title';
import COLORS from '../constants/colors';
import AppButton from '../components/AppButton';

type GameOverProps = {
  actualNumber: number;
  guessNumTimes: number;
  handleResetGame: () => void;
};

// const dimensions = Dimensions.get('window').width;

const GameOver = ({
  actualNumber,
  guessNumTimes,
  handleResetGame,
}: GameOverProps) => {
  // later use  react-native-orientation module.
  const {height, width} = useWindowDimensions();
  console.log(height, width);

  const isBiggerScreen = width > 500;

  return (
    <View style={styles.screenContainer}>
      <Title>GameOver</Title>
      <Image
        source={require('../assets/images/success.png')}
        style={styles.img}
      />
      <Text
        style={[
          styles.text,
          isBiggerScreen ? styles.bigScreenText : styles.smallScreenText,
        ]}>
        Your phone took {guessNumTimes} times to guess {actualNumber} number
      </Text>
      <View style={styles.newBtn}>
        <AppButton onPress={handleResetGame}>Start New Game</AppButton>
      </View>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 50,
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 150,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Inter-Bold',
    fontWeight: '600',
    color: COLORS.primary700,
    textAlign: 'center',
    marginTop: 18,
  },
  smallScreenText: {
    fontSize: 24,
  },
  bigScreenText: {
    fontSize: 32,
  },
  newBtn: {
    alignSelf: 'center',
    marginTop: 20,
  },
});
