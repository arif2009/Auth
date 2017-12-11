/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, AsyncStorage, StatusBar } from 'react-native';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  state = { logedIn: null };

  componentDidMount() {
    AsyncStorage.getItem('@MyAuth:user', (error, result) => {
      console.log('ComponentDidMount', result, (result != null));
      this.setState({ logedIn: result != null });
    });
  }

  onButtonPress() {
    //AsyncStorage.removeItem('@MyAuth:user');
    AsyncStorage.clear();
    AsyncStorage.getItem('@MyAuth:user', (error, result) => {
      console.log('LogOut', result, (result != null));
    });
    this.setState({ logedIn: false });
  }

  renderContent() {
    //console.log(this.state.logedIn);
    switch (this.state.logedIn) {
      case true:
        return <Button onPress={this.onButtonPress.bind(this)}>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor:'#455a64',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
};

export default App;

