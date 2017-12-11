import React from 'react';
import { View } from 'react-native';

// Make a component
const Card = (props) => {
    return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    );
  };

const styles = {

    containerStyle: {
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding:10,
        borderRadius: 5,
        backgroundColor: '#99AAFF'
    }
};

export { Card };
