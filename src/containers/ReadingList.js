import React, { Component } from 'react';
import NavBar, { NavButton, NavButtonText, NavTitle} from 'react-native-nav'
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Profile extends Component {
  render() {
    return(
      <View style={styles.container}>
      <NavBar style={styles}>
        <NavButton onPress={Actions.Profile}>
          <NavButtonText>
            {"Home"}
          </NavButtonText>
        </NavButton>
        <NavTitle style={styles.title}>
          {"BookWorm Reading List"}
        </NavTitle>
        <NavButton onPress={() => alert('This will be the search')}>
          <NavButtonText>
            {"Search"}
            </NavButtonText>
        </NavButton>
      </NavBar>
        <Text>
          BOOKS GALORE
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'oldlace',
  },
  statusBar: {
    backgroundColor: 'steelblue',
    height: 50,
  },
  navBar: {
    backgroundColor: 'steelblue',
  },
  title: {
    color: 'black',
  },
})
