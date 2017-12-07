import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
        //height: Dimensions.get('window').height
    }

};

export { Spinner };
