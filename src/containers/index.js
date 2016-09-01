import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './Login';
import Quiz from './Quiz';
import Profile from './Profile';
import ReadingList from './ReadingList';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Login" component={Login} title="Login" initial={true} hideNavBar={true}  />
          <Scene key="Profile" component={Profile} title="Profile"/>
          <Scene key="Quiz" component={Quiz} title="Quiz" />
          <Scene key="ReadingList" component={ReadingList} title="ReadingList" />
        </Scene>
      </Router>
    )
  }
}
