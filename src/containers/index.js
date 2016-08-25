import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './Login';
import Quiz from './Quiz';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Login" component={Login} title="Login" initial={true} hideNavBar={true}  />
          <Scene key="Quiz" component={Quiz} title="Quiz" />
        </Scene>
      </Router>
    )
  }
}
