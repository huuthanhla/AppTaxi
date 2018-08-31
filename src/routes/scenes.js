import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import HomeContainer from './Home/container/HomeContainer'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={HomeContainer} title="Home" initial={true} />
  </Scene>
)

export default scenes