import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { styles as globalStyle } from '../theme/appTheme';
import { SCREENS } from '../constants/';



const BasicLayout = ({ children }) => {

    const [renderScreen, setRenderScreen] = useState(SCREENS.INIT)

    const component = React.useMemo(() => {
        return React.cloneElement(children[renderScreen], { goTo: setRenderScreen });
    }, [renderScreen]);
    return (
        <SafeAreaView style={globalStyle.backgroundApp}>
            <View style={{flex: 1}}>
                {component}
            </View>
        </SafeAreaView>
    );
};

export default BasicLayout;
