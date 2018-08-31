/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View} from 'react-native';

import Root from "./src/main";

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Root {...this.props} />
      </View>
    );
  }
}

export default App