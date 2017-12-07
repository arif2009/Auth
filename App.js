/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  state = { logedIn: null };

  componentWillMount() {
    AsyncStorage.getItem('@MyAuth:user', (error, result) => {
      console.log('result', result, (result != null));
      this.setState({ logedIn: true });
    });
  }

  async getApplicationData() {
    return await AsyncStorage.getItem('@MyAuth:user', (error, result) => {
      return result;
    }
  );
}

  renderContent() {
    //console.log(this.state.logedIn);
    switch (this.state.logedIn) {
      case true:
        return <Button onPress={async x => await AsyncStorage.clear()}>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
    //{this.renderContent()}
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText="Authentication" />
        <Spinner size="large" />
        <View style={{width: 100, height: 100, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
};

export default App;

