import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const t = require('tcomb-form-native');

const Form = t.form.Form;

const Person = t.struct({
  username: t.String,
  password: t.String,
  ConfirmPassword: t.String,
  email: t.maybe(t.String),
});

export default class SignUp extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={{height:30, marginTop: 20, padding: 5}}>
          First! We need your necessary info -
        </Text>
        <View style={styles.form}>
          <Form
            ref="form"
            type={Person}
          />
        </View>
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
        <Text style={styles.buttonText} onPress={Actions.Quiz}>Submit</Text>
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
    backgroundColor: 'oldlace',
  },
  form: {
    marginTop: 20,
    width: 300,
    alignSelf: 'center',
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
});
