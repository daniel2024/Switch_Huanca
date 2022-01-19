import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Title, Button, StatusBar } from '../components/';
import Styles from './styles';
import { SCREENS } from '../constants';




const StartCalculator = ({ goTo }) => {
    return (
        <View style={Styles.container}>
            

            <Title style={Styles.title}>Inicio Calculadora</Title>
            <View style={Styles.containerStartButton}>
                <Button onPress={() => goTo(SCREENS.CALCULATOR)} text='Iniciar Cuentas'> </Button>
            </View>
        </View>
    );
};

export default StartCalculator;
