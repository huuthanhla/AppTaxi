import React, { Component } from 'react'
import { View, Text } from 'react-native'
import createStore from './store/createStore';

class Root extends Component {
  renderApp() {
    const inititalState = window.__INTITIAL_STATE__;
    const store = createStore(inititalState)

    return (
      
    )
  }

  render() {
    return this.renderApp()
  }
}

export default Root