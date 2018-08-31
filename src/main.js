import React, { Component } from 'react'
import createStore from './store/createStore';
import AppContatiner from './AppContainer'

class Root extends Component {
  renderApp() {
    const initialState = window.__INTITIAL_STATE__;
    const store = createStore(initialState)

    return (
      <AppContatiner store={store} />
    )
  }

  render() {
    return this.renderApp()
  }
}

export default Root