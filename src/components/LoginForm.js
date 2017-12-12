import React, { Component } from 'react';
import { Text, AsyncStorage, TouchableOpacity } from 'react-native';
import axios from 'axios';
import RNRestart from 'react-native-restart';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    const data = `grant_type=password&username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    const header = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

    axios.post('http://www.bloodconnector.org/token', data, header)
    .then(response => this.onLoginSuccess(response.data))
    .catch(this.onLoginFailed.bind(this));
  }

  onLoginFailed() {
    this.setState({ 
      error: 'Authentication Failed.',
      loading: false
     });
  }

  onLoginSuccess(userData) {
    this.setState({ 
      email: '', 
      password: '',
      error: '',
      loading: false
     });

    this.setApplicationData(userData);
  }

  async setApplicationData(data) {
    try {
      await AsyncStorage.setItem('@MyAuth:user', JSON.stringify(data));
      console.log('Saved');
      RNRestart.Restart();
    } catch (error) {
      console.log('Error in LoginForm > setApplicationData', error);
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)} >
        <Text style={styles.textStyle}>Log In</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Card>
          <CardSection>
              <Input
                placeholder="user@gmail.com"
                label="Email"
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
              />
          </CardSection>

          <CardSection>
              <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                value={this.state.password}
                onChangeText={pass => this.setState({ password: pass })}
              />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    fontWeight: 'normal',
    alignSelf: 'center',
    color: '#ff4000'
  },
  buttonStyle: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#007aff',
    backgroundColor: '#0080ff',
    borderRadius: 5,
    height:50,
    paddingBottom: 10,
    paddingTop: 10
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'stretch'
  }
};

export default LoginForm;
