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
        <Text style={styles.welcome}>
          Welcome to BookWorm
        </Text>
        <Text style={styles.intro}>
          This is Olivia's First ios App
        </Text>
        <Text style={styles.instructions}>
          Have a personalized Reading List built for you,{'\n'}
          create a profile by Signing In below!
        </Text>

        <Form
          ref="form"
          type={Person}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText} onPress={Actions.Quiz}>Create</Text>
        </TouchableHighlight>


        <Text style={styles.instructions}>
          Already Have a Profile?
        </Text>
        <Button
          style={{fontSize: 15, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
            Sign In Here!
          </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf0e6',
  },
  image: {
    marginTop: 15,
    width: 400,
    height: 225,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'steelblue',
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#8b0000',
    borderColor: '#800000',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center'
  }

});
