import { View, Text } from 'react-native';
import React from 'react';
import { Title, Button, ButtonCalc } from '../components';
import Styles from './styles';
import { SCREENS } from '../constants';
import useCalculadora from '../hooks/useCalculadora';



const CalculatorScreen = ({ goTo }) => {
    const {
        numeroAnterior,
        numero,
        limpiar,
        positioNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculadora();
    return (
        <View style={{flex:1}}>
            <View style={Styles.containerHead} >
                <Button text={"Atras"} onPress={() => goTo(SCREENS.INIT)} />
                <Title style={{ paddingLeft: 60 }}>Calculator App</Title>
            </View>

            <View style={Styles.calculatorContainer}>
                {
                    (numeroAnterior !== '0') && (
                        <Text style={Styles.previousResult}>{numeroAnterior}</Text>
                    )
                }

                <Text
                    style={Styles.display}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                >
                    {numero}
                </Text>


                {/* row de botones */}
                <View style={Styles.row}>
                    <ButtonCalc texto="C" color="#9B9B9B" onPress={limpiar} />
                    <ButtonCalc texto="+/-" color="#9B9B9B" onPress={positioNegativo} />
                    <ButtonCalc texto="del" color="#9B9B9B" onPress={btnDelete} />
                    <ButtonCalc texto="/" color="#FF9427" onPress={btnDividir} />
                </View>

                {/* row de botones */}
                <View style={Styles.row}>
                    <ButtonCalc texto="7" onPress={armarNumero} />
                    <ButtonCalc texto="8" onPress={armarNumero} />
                    <ButtonCalc texto="9" onPress={armarNumero} />
                    <ButtonCalc texto="X" color="#FF9427" onPress={btnMultiplicar} />
                </View>

                {/* row de botones */}
                <View style={Styles.row}>
                    <ButtonCalc texto="4" onPress={armarNumero} />
                    <ButtonCalc texto="5" onPress={armarNumero} />
                    <ButtonCalc texto="6" onPress={armarNumero} />
                    <ButtonCalc texto="-" color="#FF9427" onPress={btnRestar} />
                </View>

                {/* row de botones */}
                <View style={Styles.row}>
                    <ButtonCalc texto="1" onPress={armarNumero} />
                    <ButtonCalc texto="2" onPress={armarNumero} />
                    <ButtonCalc texto="3" onPress={armarNumero} />
                    <ButtonCalc texto="+" color="#FF9427" onPress={btnSumar} />
                </View>

                {/* row de botones */}
                <View style={Styles.row}>
                    <ButtonCalc texto="0" onPress={armarNumero} ancho />
                    <ButtonCalc texto="." onPress={armarNumero} />
                    <ButtonCalc texto="=" color="#FF9427" onPress={calcular} />
                </View>

            </View>

        </View>
    );
};

export default CalculatorScreen;
