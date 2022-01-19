/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import BasicLayout from './src/layouts/BasicLayout';
import CalculatorScreen from './src/screens/CalculatorScreen';
import StartCalculator from './src/screens/StartCalculator';

const App = () => {
  return (
    <BasicLayout>
      <StartCalculator />
      <CalculatorScreen />
    </BasicLayout>
  );
};

export default App;
