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
        color: '#fff',
        fontWeight: '600',
        alignSelf: 'stretch'
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#007aff',
        backgroundColor: '#0080ff',
        borderRadius: 5,
        height:50,
        paddingBottom: 10,
        paddingTop: 10
    }
};

export { Button };
