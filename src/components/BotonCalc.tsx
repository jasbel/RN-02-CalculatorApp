import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    text: string,
    color?: string,
    multiplicateWidth?: number,
    onPress: (textNumber: string) => void
}

const sizeButton = 60;

const BotonCalc = (props:Props) => {
    
    const {text, color= '#2d2d2d', multiplicateWidth = 1, onPress} = props;

    return (
        <TouchableOpacity
            onPress={() => onPress(text)}
        >
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: sizeButton * multiplicateWidth + (multiplicateWidth - 1)*20
            } }>
                <Text style={{
                    ...styles.textButton,
                    color: color == '#9b9b9b' ? 'black' : 'white'
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    button: {
        height: sizeButton,
        width: sizeButton,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    textButton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 25,
        color: 'white',
        fontWeight: '300'
    }
});

export default BotonCalc
