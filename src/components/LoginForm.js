import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import axios from 'axios';
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
    } catch (error) {
      console.log('Error in LoginForm > setApplicationData', error);
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
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
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
