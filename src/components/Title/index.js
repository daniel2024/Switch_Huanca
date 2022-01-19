import { Text } from 'react-native';
import React from 'react';
import Styles from './styles';


const index = ({ children, style = {}, ...props }) => {
    return (

        <Text style={{ ...Styles.typography, ...style }}>
            {children}
        </Text>

    );
};

export default index;
