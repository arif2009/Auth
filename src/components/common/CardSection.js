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
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ddd'
    }
};

export { CardSection };
