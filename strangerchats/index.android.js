/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Welcomescreen from './app/welcomeScreen'

export default class strangerchats extends Component {
  render() {
    return (
  
   
       <Welcomescreen/>
  
    );
  }
}



AppRegistry.registerComponent('strangerchats', () => strangerchats);
