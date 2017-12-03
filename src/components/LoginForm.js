import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;
    const data = 'grant_type=password&username=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password);
    const header = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

    axios.post('http://www.bloodconnector.org/token', data, header)
    .then(response => console.log(response,response.data));

    console.log(data);
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

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Log In
            </Button>
          </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
