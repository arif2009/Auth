import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress} >
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {

    textStyle: {
        fontSize: 18,
        paddingLeft: 20,
        color: '#007aff',
        fontWeight: '600'

    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#007aff',        
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button };
