/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/routes/router';

export default class App extends Component {
  render() {
    // eslint-disable-next-line prettier/prettier
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }
}
