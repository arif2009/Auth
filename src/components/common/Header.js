// Import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, tetxColor, viewStyle, smallText } = styles;

  return (
    <View style={viewStyle}>
      <Text style={[tetxColor, textStyle]}>{props.headerText}</Text>
      <Text style={[tetxColor, smallText]}>Token Based Authentication</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200

  },
  tetxColor:{
    color: '#FFF'
  },
  textStyle: {
    fontSize: 30
  },
  smallText: {
    fontSize: 15
  }
};

// Make the component availavle to other parts of app
export { Header };
