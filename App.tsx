import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import Hello from './src/screens/Hello';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.bkg}>

      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />

      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App
