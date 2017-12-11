import React from 'react';
import { View } from 'react-native';

// Make a component
const CardSection = (props) => {
    return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    );
  };

const styles = {

    containerStyle: {
        justifyContent: 'center',
        flexDirection: 'row'
    }
};

export { CardSection };
