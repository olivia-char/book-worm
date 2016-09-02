import React, { Component } from 'react';
import Button from 'react-native-button';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const t = require('tcomb-form-native');

const Form = t.form.Form;

const Person = t.struct({
  username: t.String,
  password: t.String,
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onPressButton = () => {
      console.log(3)
    };
    this.onPress = () => {
      const value =this.refs.form.getValue();
      if (value) {
        console.log(value);
      }
    };
  }
  _handlePress() {
    console.log('Pressed!');
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../img/my_icon.jpg')} style={styles.image}/>

        <View style={styles.header}>
          <Text style={styles.welcome}>
            Welcome to BookWorm
          </Text>
          <Text style={styles.intro}>
            This is Olivia's First ios App
          </Text>
        </View>

        <View style={styles.newUserLogin}>
          <Form
            ref="form"
            type={Person}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText} onPress={Actions.Profile}>Login</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.footer}>
          <Text style={styles.instructions}>
          Have a personalized Reading List built for you,{'\n'}
          create a profile below
          </Text>
          <Button
            style={{fontSize: 18, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={Actions.SignUp}>
              Create a New Profile Here!
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  image: {
    flex: 2,
    width: 400,
    height: 225,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  header: {
    width: 400,
    height: 100,
    padding: 5,
    backgroundColor: 'oldlace',
  },
  intro: {
    fontSize: 20,
    color:'black',
    textAlign: 'center',
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
  },
  newUserLogin: {
    width: 300,
    height: 225,
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    width: 100,
    alignSelf: 'center',
    backgroundColor: 'steelblue',
    borderColor: 'cadetblue',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: 'oldlace',
    width: 400,
    height: 100,
  },
});
