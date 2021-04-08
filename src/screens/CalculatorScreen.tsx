import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
import {useCalculator} from '../hooks/useCalculator';



export const CalculatorScreen = () => {
    
    const {backNum, num, clearResult, addMinus, deleteNumber,btnMultiply, btnDivide,addNumber,btnResult, btnSubtract, btnAdd} =  useCalculator();

    return (
        <View style={ styles.containerCalculator }>
            <Text style={styles.smallResult}> {backNum} </Text>
            <Text 
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            > {num} </Text>


            <View style={styles.row }>
                <BotonCalc color="#9b9b9b" text="C" onPress={clearResult}/>
                <BotonCalc color="#9b9b9b" text="+/-" onPress={addMinus} />
                <BotonCalc color="#9b9b9b" text="del" onPress={deleteNumber} />
                <BotonCalc color="#ff9427" text="/" onPress={btnDivide} />
            </View>
            <View style={styles.row }>
                <BotonCalc text="7" onPress={addNumber} />
                <BotonCalc text="8" onPress={addNumber} />
                <BotonCalc text="9" onPress={addNumber} />
                <BotonCalc color="#ff9427" text="x" onPress={btnMultiply}/>
            </View>
            
            <View style={styles.row }>
                <BotonCalc text="4" onPress={addNumber} />
                <BotonCalc text="5" onPress={addNumber} />
                <BotonCalc text="6" onPress={addNumber} />
                <BotonCalc color="#ff9427" text="-" onPress={btnSubtract} />
            </View>

            <View style={styles.row }>
                <BotonCalc text="1" onPress={addNumber} />
                <BotonCalc text="2" onPress={addNumber} />
                <BotonCalc text="3" onPress={addNumber} />
                <BotonCalc color="#ff9427" text="+" onPress={btnAdd} />
            </View>

            <View style={styles.row }>
                <BotonCalc text="0" multiplicateWidth={2}  onPress={addNumber} />
                <BotonCalc text="." onPress={addNumber} />
                <BotonCalc color="#ff9427" text="=" onPress ={btnResult} />
            </View>
        </View>
    )
}
