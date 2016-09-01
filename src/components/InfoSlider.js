import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Slider,
} from 'react-native';

export default class InfoSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || 0,
    }
  }
  render() {
    return(
      <View>
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <View style={styles.slider}>
          <Slider
            {...this.props}
            minimumValue={this.props.minimumValue}
            maximumValue={this.props.maximumValue}
            onValueChange={(value) => this.setState({value: value})}
            step={this.props.step}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    height: 10,
    width: 200,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});
