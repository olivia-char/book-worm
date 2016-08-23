import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Navigator,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: 'Username',
      text2: 'Password',
    };
    this.onPressButton = () => {
      console.log(3)
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../img/my_icon.jpg')} style={styles.image}/>
        <Text style={styles.welcome}>
          Welcome to BookWorm
        </Text>
        <Text style={styles.intro}>
          This is Olivia's First ios App
        </Text>
        <Text style={styles.instructions}>
          Have a personalized Reading List tailored to you,{'\n'}
          create a profile by Signing In Below!
        </Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(text1) => this.setState({text1})}
          value={this.state.text1}
        />
        <TextInput
          style={styles.textBox}
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}
        />
        <TouchableHighlight underlayColor='seagreen' style={styles.button} onPress={this.onPressButton}>
          <Text>Create</Text>
        </TouchableHighlight>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={styles.signIn}>
          Already Have a Profile? Sign in Here!
        </Text>
        <TouchableHighlight underlayColor='seagreen' style={styles.button} onPress={this.onPressButton}>
          <Text>Sign In</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  image: {
    flex: 3,
    width: 400,
    height: 210,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'darkslategray',
  },
  intro: {
    fontSize: 20,
    color:'black',
    textAlign: 'center',
  },
  textBox: {
    height: 40,
    width: 250,
    margin: 5,
    padding: 10,
    borderColor: 'sienna',
    borderWidth: 1,
    alignSelf: 'center'
  },
  instructions: {
    flex: 2,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    padding: 10,
  },
  button: {
    margin: 5,
    padding: 10,
    backgroundColor: 'darkred',
  },

});
