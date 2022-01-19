import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import Styles from './styles';


const ButtonCalc = ({ texto, color = '#2D2D2D', ancho = false, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(texto)}
        >
            <View style={{
                ...Styles.buttonCalc,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}>
                <Text style={{
                    ...Styles.buttonText,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonCalc;